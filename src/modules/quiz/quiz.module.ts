import { QuestionController } from './controllers/question.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './services/quiz.service';
import { Module } from '@nestjs/common';
import { QuizController } from './controllers/quiz.controller';
import { QuizRepository } from './repositories/quiz.repository';
import { QuestionService } from './services/question.service';
import { QuestionRepository } from './repositories/question.repository';
import { OptionService } from './services/option.service';
import { OptionRepository } from './repositories/option.repository';
import { OptionController } from './controllers/option.controller';

@Module({
  controllers: [QuizController, QuestionController, OptionController],
  imports: [
    TypeOrmModule.forFeature([
      QuizRepository,
      QuestionRepository,
      OptionRepository,
    ]),
  ],
  providers: [QuizService, QuestionService, OptionService],
})
export class QuizModule {}
