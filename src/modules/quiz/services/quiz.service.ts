import { Question } from './../entities/question.entity';
import { Quiz } from './../entities/quiz.entity';
import { CreateQuizDto } from '../dto/create-quiz.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuizRepository } from '../repositories/quiz.repository';

@Injectable()
export class QuizService {
  constructor(
    @InjectRepository(QuizRepository) private quizRepository: QuizRepository,
  ) {}

  async getAllQuiz(): Promise<Quiz[]> {
    return await this.quizRepository
      .createQueryBuilder('q')
      .leftJoinAndSelect('q.questions', 'qt', 'q.id = qt.quizId')
      .leftJoinAndSelect('qt.options', 'o', 'qt.id = o.questionId')
      .getMany();
  }

  async getQuizById(id: number): Promise<Quiz> {
    return await this.quizRepository.findOne(id, { relations: ['questions'] });
  }

  async createNewQuiz(quiz: CreateQuizDto) {
    try {
      return await this.quizRepository.save(quiz);
    } catch (error) {
      console.log('createNewQuiz error:', error);
    }
  }
}
