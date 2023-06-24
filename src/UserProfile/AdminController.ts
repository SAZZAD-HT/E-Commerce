import {  Body,  Controller,  Delete,  FileTypeValidator,  Get,  MaxFileSizeValidator,  Param,  ParseFilePipe,  ParseIntPipe,  Patch,  Post,  Put,  Query,  Res,  Session,  UnauthorizedException,  UploadedFile,  UseGuards,  UseInterceptors,  UsePipes,  ValidationPipe,} from '@nestjs/common';
import { AdminService } from './Services/AdminService';
import { AddUserDto } from './Dto/Admindd';
import { User } from './Entity/Admin';


@Controller('user')
export class UserController {

   
    constructor(private readonly AdminService: AdminService
         ) {}
    
    @Get()
    async findAll(): Promise<User[]> {
        return await this.AdminService.findAll();
    }
    
   
    
    @Post('/register')
    async create(@Body() user: AddUserDto): Promise<User> {
        console.log("Controller"+user);
        return await this.AdminService.create(user);
    }


    
    @Put('/update/:id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() user: User): Promise<void> {
        await this.AdminService.update(id, user);
    }
    
    @Delete('/delete/:id')
    async delete(@Param('id', ParseIntPipe) id: number): Promise<void> {
        console.log("delete"+id);
        await this.AdminService.delete(id);
    }

    @Post('/login')
    async login(@Body() loginData: { UserEmail: string; UserPassword: string }) {
      try {
        const token = await this.AdminService.login(loginData);
        return { success: true, token };
      } catch (error) {
        return { success: false, message: error.message };
      }
    }








    
}