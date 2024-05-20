import { Module } from '@nestjs/common';
import { BookModuleController } from './book-module.controller';
import { BookService } from './book-module.service';
import { PrismaService } from 'src/prisma.service'; 

@Module({
  controllers: [BookModuleController],
  providers: [BookService,PrismaService],
  exports: [BookService],
})
export class BookModuleModule {}
