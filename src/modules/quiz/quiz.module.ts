import { QuizService } from './quiz.service';
import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';

@Module({
  controllers: [QuizController],
  providers: [QuizService],
})
export class QuizModule {}
