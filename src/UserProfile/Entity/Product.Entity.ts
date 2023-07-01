import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
    ProductId: number;
    @Column()
    ProductName:string
    @Column()
    ProductDescription:string
    @Column()
    ProductPrice:Number
    @Column()
    ProductImage:string
    @Column()
    ProductCategory:string
    @Column()
    ProductQuantity:Number
    @Column()
    ProductStatus:string
    @Column()
    ProductRating:Number
    @Column()
    ProductReview:string
    


  
}
