import { QuizRepository } from './../repositories/quiz.repository';
import { QuizService } from './quiz.service';
import { CreateQuestionDto } from './../dto/create-question.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { QuestionRepository } from '../repositories/question.repository';
import { Quiz } from '../entities/quiz.entity';
import { Question } from '../entities/question.entity';

@Injectable()
export class QuestionService {
  constructor(
    @InjectRepository(QuestionRepository)
    private questionRepository: QuestionRepository,
    private quizRepository: QuizRepository,
  ) {}

  getAllQuestion(): Array<number> {
    return [1, 2, 3, 4, 5];
  }

  async getQuestionById(id: number): Promise<Question> {
    return await this.questionRepository.findOne(id, {
      relations: ['options'],
    });
  }

  async createNewQuestion(
    question: CreateQuestionDto,
    quiz: Quiz,
  ): Promise<Question> {
    try {
      const newQuestion = await this.questionRepository.save({
        question: question.question,
      });
      quiz.questions = [newQuestion, ...quiz.questions];
      await quiz.save();
      return newQuestion;
    } catch (error) {
      console.log('createNewQuestion error:', error);
    }
  }
}
