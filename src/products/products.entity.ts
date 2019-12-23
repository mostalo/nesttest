import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 25 })
    productName:string;

    @Column({ length: 50 })
    productDesc:string;
    

}