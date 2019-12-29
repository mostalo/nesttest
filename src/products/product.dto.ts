import { IsString } from 'class-validator';

export class ProductDTO{
    @IsString()
    readonly productName: string;

    @IsString()
    readonly productDesc: string;
}