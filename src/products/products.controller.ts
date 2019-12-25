import { Controller, Get, Post, Put, Delete, Body, Param,  } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductDTO } from './product.dto';

@Controller('products')
export class ProductsController {

    constructor( private productservice: ProductsService ){}
    @Get()
    showAllProducts(){
        return this.productservice.showAll();
    }

    @Post()
    createProduct(@Body() data:ProductDTO){
        return this.productservice.create(data);
    }

    @Get(':id')
    readProduct(@Param('id') id: string){
        return this.productservice.read(id);
    }

    @Put(':id')
    updateProduct(@Param('id') id: string, @Body() data: Partial<ProductDTO>){
        return this.productservice.update(id, data);
    }

    @Delete(':id')
    destryProduct(@Param('id') id: string){
        return this.productservice.destroy(id);
    }

}

