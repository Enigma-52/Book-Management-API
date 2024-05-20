import { Injectable , NotFoundException , ConflictException , InternalServerErrorException} from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';

@Injectable()
export class BookService {
  constructor(private prisma: PrismaService) {}

  async createBook(createBookDto: CreateBookDto) {
    try {
      return this.prisma.book.create({ data: createBookDto });
    } catch (error) {
      if (error instanceof ConflictException) {
        throw error;
      }
      throw new InternalServerErrorException('Failed to create a new book');
    }
  }

  async findAll() {
    try {
      return this.prisma.book.findMany();
    } catch (error) {
      throw new InternalServerErrorException('Failed to retrieve books');
    }
  }

  async findOne(id: number) {
    const book = await this.prisma.book.findUnique({ where: { id } });
    if (!book) {
      throw new NotFoundException(`Book with ID ${id} not found`);
    }
    return book;
  }

  async update(id: number, updateBookDto: UpdateBookDto) {
    try {
      return this.prisma.book.update({ where: { id: Number(id) }, data: updateBookDto }); 
    } catch (error) {
      throw new InternalServerErrorException('Failed to update the book');
    }
  }
  

  async remove(id: number) {
    try {
      return this.prisma.book.delete({ where: { id: Number(id) } });
    } catch (error) {
      throw new InternalServerErrorException('Failed to delete the book');
    }
  }
}