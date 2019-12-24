import { Injectable } from '@nestjs/common';
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
        return await this.productRepository.findOne({ where: { id }});
    }

    async update(id: string, data: Partial<ProductDTO>) {
        await this.productRepository.update(id , data);
        return this.productRepository.findOne({ where: { id }});
    }

    async destroy(id: string){
        await this.productRepository.delete(id);
        return { deleted: true};
    }

    
}
