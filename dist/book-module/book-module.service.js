"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
let BookService = class BookService {
    constructor(prisma) {
        this.prisma = prisma;
    }
    async createBook(createBookDto) {
        try {
            return this.prisma.book.create({ data: createBookDto });
        }
        catch (error) {
            if (error instanceof common_1.ConflictException) {
                throw error;
            }
            throw new common_1.InternalServerErrorException('Failed to create a new book');
        }
    }
    async findAll() {
        try {
            return this.prisma.book.findMany();
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to retrieve books');
        }
    }
    async findOne(id) {
        const book = await this.prisma.book.findUnique({ where: { id } });
        if (!book) {
            throw new common_1.NotFoundException(`Book with ID ${id} not found`);
        }
        return book;
    }
    async update(id, updateBookDto) {
        try {
            return this.prisma.book.update({ where: { id: Number(id) }, data: updateBookDto });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to update the book');
        }
    }
    async remove(id) {
        try {
            return this.prisma.book.delete({ where: { id: Number(id) } });
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Failed to delete the book');
        }
    }
};
exports.BookService = BookService;
exports.BookService = BookService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], BookService);
//# sourceMappingURL=book-module.service.js.map