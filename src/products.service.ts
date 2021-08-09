import { Injectable } from "@nestjs/common";
import { Product } from "./product.model";

@Injectable()
export class ProductsService {
    private readonly products: Product[] = [
        new Product("LIV01", "Livro 1", 29.90),
        new Product("LIV02", "Livro 2", 39.90),
        new Product("LIV03", "Livro 3", 29.90),
    ];

    getAll(): Product[] {
        return this.products;
    }

    getOne(id: number): Product {
        return this.products[0];
    }

    create(product: Product) {
        this.products.push(product);
    }

    update(product: Product): Product {
        return product;
    }

    delete(id: number) {
        this.products.pop();
    }
}