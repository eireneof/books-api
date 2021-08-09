import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";

@Controller('products')
export class ProductsController {
    products: Product[] = [
        new Product("LIV01", "Livro 1", 29.90),
        new Product("LIV02", "Livro 2", 39.90),
        new Product("LIV03", "Livro 3", 29.90),
    ];

    @Get()
    findAll(): Product[] {
        return this.products;
    }

    @Get(':id')
    findOne(@Param() params): Product {
        return this.products[0];
    }

    @Post()
    create(@Body() product: Product) {
        product.id = 100;
        this.products.push(product);
    }

    @Put()
    editOne(@Body() product: Product) : Product{
        return product;
    }

    @Delete(':id')
    delete(@Param() params){
        return this.products.pop();
    }
}