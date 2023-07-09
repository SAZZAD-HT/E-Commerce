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

import { AuthGuard } from '../Authgourd/AuthGurd';
import { CartController } from '../CartController';
import { CartService } from '../Services/cartservice';



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
  providers: [AdminService,ProductService,AuthGuard,CartService],
  controllers: [AdminController,ProductController,CartController],

})

export class DatabaseModulemosque {}
