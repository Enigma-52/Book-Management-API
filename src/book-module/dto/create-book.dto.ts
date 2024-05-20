import { IsString, IsNotEmpty, IsISO8601} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateBookDto {
  @IsString()
  @IsNotEmpty({ message: 'Please provide a title for the book.' })
  @ApiProperty({ example: 'Book Title' })
  title: string;

  @IsString()
  @IsNotEmpty({ message: 'Please provide a summary for the book.' })
  @ApiProperty({ example: 'Book Summary' })
  summary: string;

  @IsISO8601({ strict: true }, { message: 'Published date must be in ISO 8601 format.' })
  @IsNotEmpty({ message: 'Please provide the publication date.' })
  @ApiProperty({ example: '2024-05-20T14:30:00Z' })
  publishedDate: Date;

}
