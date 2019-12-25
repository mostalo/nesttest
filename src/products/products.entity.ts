import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {

    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column({ length: 25})
    productName:string;

    @Column({ length: 25 })
    productDesc:string;
    

}