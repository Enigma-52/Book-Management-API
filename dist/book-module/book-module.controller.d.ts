import { BookService } from './book-module.service';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
export declare class BookModuleController {
    private readonly bookService;
    constructor(bookService: BookService);
    create(createBookDto: CreateBookDto): Promise<{
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
    findOne(id: string): Promise<{
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
