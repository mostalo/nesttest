import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.entity';
import { ProductDTO } from './product.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectRepository(Product) private productRepository: Repository<Product>){}

    async showAll(){
        return await this.productRepository.find();
    }

    async create(data: ProductDTO) {
        const product = this.productRepository.create(data);
        await this.productRepository.save(data);
        return product;
    }

    async read(id: string){
        const product = await this.productRepository.findOne({ where: { id }});
        if(!product) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        return product;
    }

    async update(id: string, data: Partial<ProductDTO>) {
     let product = await this.productRepository.findOne({ where: { id }});
     if(!product) {
        throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
    }
        await this.productRepository.update(id , data);
        product = await this.productRepository.findOne({ where: { id }});
        return product;
    }

    async destroy(id: string){
        
     const product = await this.productRepository.findOne({ where: { id }});

        if(!product) {
            throw new HttpException('Not Found', HttpStatus.NOT_FOUND);
        }
        await this.productRepository.delete(id);
        return product;
    }
 
     
}
