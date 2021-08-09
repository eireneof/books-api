import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { Product } from "./product.model";
import { ProductsService } from "./products.service";

@Controller('products')
export class ProductsController {
    constructor(private productsService: ProductsService) {

    }

    @Get()
    findAll(): Product[] {
        return this.productsService.getAll();
    }

    @Get(':id')
    findOne(@Param() params): Product {
        return this.productsService.getOne(params.id);
    }

    @Post()
    create(@Body() product: Product) {
        this.productsService.create(product);
    }

    @Put()
    update(@Body() product: Product) : Product{
        return this.productsService.update(product);
    }

    @Delete(':id')
    delete(@Param() params){
        return this.productsService.delete(params.id);
    }
}