import { Quiz } from './quiz.entity';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz> {}
