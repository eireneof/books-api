import { Injectable } from "@nestjs/common";
import { Book } from "./book.model";

@Injectable()
export class BooksService {
    private readonly books: Book[] = [
        new Book("LIV01", "Livro 1", 29.90),
        new Book("LIV02", "Livro 2", 39.90),
        new Book("LIV03", "Livro 3", 29.90),
    ];

    getAll(): Book[] {
        return this.books;
    }

    getOne(id: number): Book {
        return this.books[0];
    }

    create(book: Book) {
        this.books.push(book);
    }

    update(book: Book): Book {
        return book;
    }

    delete(id: number) {
        this.books.pop();
    }
}