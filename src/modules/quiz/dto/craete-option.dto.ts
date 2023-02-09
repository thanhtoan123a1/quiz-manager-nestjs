import { IsNotEmpty, Length } from 'class-validator';

export class CreateOptionDto {
  @IsNotEmpty({
    message: 'text is not empty!',
  })
  @Length(2, 255)
  text: string;

  @IsNotEmpty()
  questionId: number;

  @IsNotEmpty()
  isCorrect: boolean;
}
