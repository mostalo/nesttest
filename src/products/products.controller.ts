import { Controller, Get, Post, Put, Delete,  } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {

    constructor( private productservice: ProductsService ){}
    @Get()
    showAllProducts(){}

    @Post()
    createProduct(){}

    @Get(':id')
    readProduct(){}

    @Put(':id')
    updateProduct(){}

    @Delete(':id')
    destryProduct(){}

}

