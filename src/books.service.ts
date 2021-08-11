import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
//import { Sequelize } from "sequelize-typescript";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
    
    constructor(
        
        @InjectModel(Book)
        private bookModel: typeof Book,
        //private sequelize: Sequelize
        ) {}

    async getAll(): Promise<Book[]> {
        return this.bookModel.findAll();
    }

    async getOne(id: number): Promise<Book> {
        return this.bookModel.findByPk(id);
    }

    async create(book: Book) {
        this.bookModel.create(book);
    }

    async update(book: Book): Promise<[number, Book[]]> {
        return this.bookModel.update(book, {
            where: {
                id: book.id
            }
        });
    }

    async delete(id: number) {
        const book: Book = await this.getOne(id);
        book.destroy();
    }
}