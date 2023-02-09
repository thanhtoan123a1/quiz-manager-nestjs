import { QuestionService } from './../services/question.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { OptionService } from '../services/option.service';
import { CreateOptionDto } from '../dto/craete-option.dto';

@Controller('question/option')
export class OptionController {
  constructor(
    private questionService: QuestionService,
    private optionService: OptionService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveOption(@Body() option: CreateOptionDto) {
    const question = await this.questionService.getQuestionById(
      option.questionId,
    );
    const newOption = await this.optionService.createNewOption(
      option,
      question,
    );
    return { question, createOption: option, option: newOption };
  }
}
