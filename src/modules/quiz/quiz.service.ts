import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from './quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  getAllQuiz(): Array<number> {
    return [1, 2, 3, 4, 5];
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    try {
      return await this.quizRepository.save(quiz);
    } catch (error) {
      console.log('createNewQuiz error:', error);
    }
  }
}
