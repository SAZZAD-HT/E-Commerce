import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';

import { User } from '../Entity/Admin';
import { AdminService } from '../Services/AdminService';
import { UserController } from '../AdminController';
import { ProductEntity } from '../Entity/Product.Entity';
import { ProductService } from '../Services/Product.Services';
import { ProductController } from '../ProductController';



@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'sazzad',
        database: 'ecommerce',
        entities: [User,ProductEntity],
        synchronize: false,
	}),TypeOrmModule.forFeature([User,ProductEntity])
	],
  providers: [AdminService,ProductService],
  controllers: [UserController,ProductController]

})

export class DatabaseModulemosque {}
