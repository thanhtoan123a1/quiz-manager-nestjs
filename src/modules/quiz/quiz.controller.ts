import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';

@Controller('quiz')
export class QuizController {
  constructor(private quizService: QuizService) {}
  @Get('/')
  getAllQuiz() {
    return this.quizService.getAllQuiz();
  }
  @Post('/create')
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  createQuiz(@Body() quizData: CreateQuizDto) {
    return {
      data: quizData,
    };
  }
}
