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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookModuleController = void 0;
const common_1 = require("@nestjs/common");
const book_module_service_1 = require("./book-module.service");
const create_book_dto_1 = require("./dto/create-book.dto");
const update_book_dto_1 = require("./dto/update-book.dto");
const swagger_1 = require("@nestjs/swagger");
let BookModuleController = class BookModuleController {
    constructor(bookService) {
        this.bookService = bookService;
    }
    async create(createBookDto) {
        return this.bookService.createBook(createBookDto);
    }
    async findAll() {
        return this.bookService.findAll();
    }
    async findOne(id) {
        return this.bookService.findOne(+id);
    }
    async update(id, updateBookDto) {
        try {
            return this.bookService.update(id, updateBookDto);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to update the book');
            }
        }
    }
    async remove(id) {
        try {
            return this.bookService.remove(id);
        }
        catch (error) {
            if (error instanceof common_1.NotFoundException) {
                throw new common_1.NotFoundException(error.message);
            }
            else {
                throw new common_1.InternalServerErrorException('Failed to delete the book');
            }
        }
    }
};
exports.BookModuleController = BookModuleController;
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Create a new book' }),
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_book_dto_1.CreateBookDto]),
    __metadata("design:returntype", Promise)
], BookModuleController.prototype, "create", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve a list of all the books' }),
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], BookModuleController.prototype, "findAll", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Retrieve details of a specific book' }),
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], BookModuleController.prototype, "findOne", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Update details of a specific book' }),
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_book_dto_1.UpdateBookDto]),
    __metadata("design:returntype", Promise)
], BookModuleController.prototype, "update", null);
__decorate([
    (0, swagger_1.ApiOperation)({ summary: 'Delete a specific book' }),
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], BookModuleController.prototype, "remove", null);
exports.BookModuleController = BookModuleController = __decorate([
    (0, swagger_1.ApiTags)('books'),
    (0, common_1.Controller)('books'),
    __metadata("design:paramtypes", [book_module_service_1.BookService])
], BookModuleController);
//# sourceMappingURL=book-module.controller.js.map