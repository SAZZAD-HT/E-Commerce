import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';
import {  NestModule, MiddlewareConsumer } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';


import { User } from '../Entity/Admin';
import { AdminService } from '../Services/AdminService';
import { AdminController } from '../AdminController';
import { ProductEntity } from '../Entity/Product.Entity';
import { ProductService } from '../Services/Product.Services';
import { ProductController } from '../ProductController';
import { AuthService } from '../Services/Login.service';
import { AuthController } from '../AuthController';



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
  providers: [AdminService,ProductService,AuthService],
  controllers: [AdminController,ProductController,AuthController]

})

export class DatabaseModulemosque {}
