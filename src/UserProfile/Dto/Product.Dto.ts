import { IsNotEmpty,IsNumber,MaxLength,MinLength,Length,IsEmail,IsOptional } from "class-validator";

export class ProductDto {
    
    @IsNumber()
    ProductId: number;
     
    ProductName:string
     
    ProductDescription:string
     @IsNumber()
    ProductPrice:Number
     
    ProductImage:string
     
    ProductCategory:string
     @IsNumber()
    ProductQuantity:Number
     
    ProductStatus:string
     @IsNumber()
    ProductRating:Number
     
    ProductReview:string
    
}