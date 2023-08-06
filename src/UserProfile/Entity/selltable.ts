import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';


@Entity()
export class SellsEntity {
  @PrimaryGeneratedColumn()
    ProductId: number;
    @Column()
    ProductName:string
    @Column()
    ProductDescription:string
    @Column()
    ProductPrice:number
    @Column()
    ProductImage:string
    @Column()
    ProductCategory:string
    @Column()
    ProductQuantity:number
    @Column({ nullable: true })
    Buyingrice:number
    @Column({ nullable: true })
    BuyingDate:Date
    @Column({ nullable: true })
    Sellingrice:number
    @Column({ nullable: true })
    SellingDate:Date
    

    
    


  
}
