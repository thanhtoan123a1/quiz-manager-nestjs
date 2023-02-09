import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Question } from '../entities/question.entity';
import { OptionRepository } from '../repositories/option.repository';
import { CreateOptionDto } from '../dto/craete-option.dto';
import { Option } from '../entities/option.entity';

@Injectable()
export class OptionService {
  constructor(
    @InjectRepository(OptionRepository)
    private optionRepository: OptionRepository,
  ) {}

  getAllOption(): Array<number> {
    return [1, 2, 3, 4, 5];
  }

  async createNewOption(
    option: CreateOptionDto,
    question: Question,
  ): Promise<Option> {
    try {
      const newOption = await this.optionRepository.save({
        text: option.text,
        isCorrect: option.isCorrect,
      });
      question.options = [newOption, ...question.options];
      await question.save();
      return newOption;
    } catch (error) {
      console.log('createNewOption error:', error);
    }
  }
}
