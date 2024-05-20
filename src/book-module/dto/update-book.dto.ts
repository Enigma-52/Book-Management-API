import {IsNumber, IsOptional, IsISO8601, IsString } from 'class-validator';
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
  @IsISO8601({ strict: true }, { message: 'Published date must be in ISO 8601 format.' })
  @ApiProperty({ example: '2024-05-20T14:30:00Z' })
  publishedDate: Date;
}
