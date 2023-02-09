import { QuizService } from './../services/quiz.service';
import { QuestionService } from './../services/question.service';
import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateQuestionDto } from '../dto/create-question.dto';

@Controller('question')
export class QuestionController {
  constructor(
    private questionService: QuestionService,
    private quizService: QuizService,
  ) {}

  @Post('')
  @UsePipes(ValidationPipe)
  async saveQuestion(@Body() question: CreateQuestionDto) {
    const quiz = await this.quizService.getQuizById(question.quizId);
    return await this.questionService.createNewQuestion(question, quiz);
  }
}
