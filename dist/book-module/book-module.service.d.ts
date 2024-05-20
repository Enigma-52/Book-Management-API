import { PrismaService } from '../prisma.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaService);
    createBook(createBookDto: CreateBookDto): Promise<{
        id: number;
        title: string;
        summary: string;
        publishedDate: Date;
    }>;
    findAll(): Promise<{
        id: number;
        title: string;
        summary: string;
        publishedDate: Date;
    }[]>;
    findOne(id: number): Promise<{
        id: number;
        title: string;
        summary: string;
        publishedDate: Date;
    }>;
    update(id: number, updateBookDto: UpdateBookDto): Promise<{
        id: number;
        title: string;
        summary: string;
        publishedDate: Date;
    }>;
    remove(id: number): Promise<{
        id: number;
        title: string;
        summary: string;
        publishedDate: Date;
    }>;
}
