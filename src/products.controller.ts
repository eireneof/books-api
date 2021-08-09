import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";

@Controller('products')
export class ProductsController {

    @Get()
    findAll(): string {
        return "Lista todos os produtos";
    }

    @Get(':id')
    findOne(@Param() params): string {
        console.log(params.id);
        return `Retorna os dados do produto ${params.id}`;
    }

    @Post()
    create(@Body() produto): string {
        console.log(produto);
        return "Produto criado";
    }

    @Put()
    editOne(@Body() produto): string {
        console.log(produto);
        return "Produto alterado";
    }

    @Delete(':id')
    delete(@Param() params): string {
        console.log(params.id);
        return `Apaga o produto ${params.id}`;
    }
}