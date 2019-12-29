import { Controller, Get, Post, Put, Delete, Body, Param, UsePipes, Logger  } from '@nestjs/common';
import { ValidationPipe } from '../shared/validation.pipe';
import { ProductsService } from './products.service';
import { ProductDTO } from './product.dto';

@Controller('api/products')
export class ProductsController {
    private logger = new Logger('ProductsController');

    constructor( private productservice: ProductsService ){}
    @Get()
    showAllProducts(){
        return this.productservice.showAll();
    }

    @Post()
    @UsePipes(new ValidationPipe())
    createProduct(@Body() data:ProductDTO){
        this.logger.log(JSON.stringify(data));
        return this.productservice.create(data);
    }

    @Get(':id')
    readProduct(@Param('id') id: string){
        return this.productservice.read(id);
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    updateProduct(@Param('id') id: string, @Body() data: Partial<ProductDTO>){
        this.logger.log(JSON.stringify(data));
        return this.productservice.update(id, data);
    }

    @Delete(':id')
    destryProduct(@Param('id') id: string){
        return this.productservice.destroy(id);
    }

}

