import { Controller, Get, Post, Put, Delete, Param, Body, NotFoundException, InternalServerErrorException } from '@nestjs/common';
import { BookService } from './book-module.service';

import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('books')
@Controller('books')
export class BookModuleController {
  constructor(private readonly bookService: BookService) {}

  @ApiOperation({ summary: 'Create a new book' })
  @Post()
  async create(@Body() createBookDto: CreateBookDto) {
    return this.bookService.createBook(createBookDto);
  }

  @ApiOperation({ summary: 'Retrieve a list of all the books' })
  @Get()
  async findAll() {
    return this.bookService.findAll();
  }

  @ApiOperation({ summary: 'Retrieve details of a specific book' })
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.bookService.findOne(+id);
  }

  @ApiOperation({ summary: 'Update details of a specific book' })
  @Put(':id')
  async update(@Param('id') id: number, @Body() updateBookDto: UpdateBookDto) {
    try {
      return this.bookService.update(id, updateBookDto);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to update the book');
      }
    }
  }

  @ApiOperation({ summary: 'Delete a specific book' })
  @Delete(':id')
  async remove(@Param('id') id: number) {
    try {
      return this.bookService.remove(id);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw new NotFoundException(error.message);
      } else {
        throw new InternalServerErrorException('Failed to delete the book');
      }
    }
  }

}
