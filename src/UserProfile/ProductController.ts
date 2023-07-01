import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { ProductService } from './Services/Product.Services';
import { ProductEntity } from './Entity/Product.Entity';

@Controller('Product')
export class ProductController {

    constructor(pdservice:ProductService) {} 
    @Get("/all")
    async findAll(): Promise<ProductEntity[]> {
        return await this.pdservice.findAll();
    }


}