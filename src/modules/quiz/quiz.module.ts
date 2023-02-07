import { TypeOrmModule } from '@nestjs/typeorm';
import { QuizService } from './quiz.service';
import { Module } from '@nestjs/common';
import { QuizController } from './quiz.controller';
import { QuizRepository } from './quiz.repository';

@Module({
  controllers: [QuizController],
  imports: [TypeOrmModule.forFeature([QuizRepository])],
  providers: [QuizService],
})
export class QuizModule {}
