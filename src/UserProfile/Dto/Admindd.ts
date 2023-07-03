import { IsNotEmpty,IsNumber,MaxLength,MinLength,Length,IsEmail,IsOptional } from "class-validator";

export class AddUserDto {

@IsNumber()
    userId: number; 
    @IsNotEmpty()
    @MaxLength(530)
    @MinLength(33)
    UserName: string;

    
    
    @IsEmail()
    UserEmail: string;

  
    @MaxLength(50)
    @MinLength(3)
    UserPassword: string;

    @MaxLength(50)
    @MinLength(3)
    Contact: string;

   
    @MaxLength(50)
    @MinLength(3)
    Role: string;

  
    @MaxLength(50)
    @MinLength(3)
    Status: string;

    Description:string
    @IsNumber()
    MobileNumber:Number
}

export class LoginUserDto {
    @IsEmail()
    UserEmail: string;

    @MaxLength(50)
    @MinLength(3)
    UserPassword: string;
}
export class UpdateUserDto {    
    @IsNotEmpty()
    @MaxLength(530)
    @MinLength(33)
    UserName: string;

    
    
    @IsEmail()
    UserEmail: string;

  
    @MaxLength(50)
    @MinLength(3)
    UserPassword: string;

    @MaxLength(50)
    @MinLength(3)
    Contact: string;

   
    @MaxLength(50)
    @MinLength(3)
    Role: string;

  
    @MaxLength(50)
    @MinLength(3)
    Status: string;

    Description:string
    @IsNumber()
    MobileNumber:Number
}