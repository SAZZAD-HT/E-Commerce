import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { AdminService } from './Services/AdminService';
;
import { ProductService } from './Services/Product.Services';
import { ProductEntity } from './Entity/Product.Entity';
import { ProductDto } from './Dto/Product.Dto';


@Controller('Product')
export class  ProductController {

   
    constructor(private readonly AdminService: ProductService) {}
    
    @Get('')
    async findAll(): Promise< ProductEntity[]> {
        return await this.AdminService.findAll();
    }
    @Get('/:id')
    async findOne(@Param('id', ParseIntPipe) id: number): Promise< ProductEntity> {
        return await this.AdminService.find(id);
    }
    
   
    
    @Post('/add')
    async create(@Body()  ProductEntity:  ProductDto): Promise< ProductEntity> {
        console.log("Controller"+ ProductEntity);
        return await this.AdminService.create( ProductEntity);
    }


    
    @Put('/update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body()  ProductEntity:  ProductEntity): Promise<void> {
        await this.AdminService.update(id,  ProductEntity);
    }
    
    @Delete('/delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        console.log("delete"+id);
        await this.AdminService.delete(id);
    }

   








    
}