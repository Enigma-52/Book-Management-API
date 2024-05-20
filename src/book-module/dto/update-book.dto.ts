import {IsNumber, IsOptional, IsDate, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateBookDto {

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Book Title' })
  title: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ example: 'Book Summary' })
  summary: string;

  @IsOptional()
  @IsDate()
  @ApiProperty({ example: '2024-05-20T14:30:00Z' })
  publishedDate: Date;
}
