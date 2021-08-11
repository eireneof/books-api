import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Book } from "./book.model";
import { BooksService } from "./books.service";

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) {

    }

    @Get()
    async findAll(): Promise<Book[]> {
        return this.booksService.getAll();
    }

    @Get(':id')
    async findOne(@Param() params):  Promise<Book> {
        return this.booksService.getOne(params.id);
    }

    @Post()
    async create(@Body() book: Book) {
        this.booksService.create(book);
    }

    @Put()
    async update(@Body() book: Book) : Promise<[number, Book[]]> {
        return this.booksService.update(book);
    }

    @Delete(':id')
    async delete(@Param() params){
        return this.booksService.delete(params.id);
    }
}