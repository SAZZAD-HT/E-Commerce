import { Module } from '@nestjs/common';
import{TypeOrmModule} from '@nestjs/typeorm';

import { User } from '../Entity/Admin';
import { AdminService } from '../Services/AdminService';
import { UserController } from '../AdminController';



@Module({
	imports:[
	TypeOrmModule.forRoot({
      type: 'mysql',
        host: 'localhost',
        port: 3306,
        username: 'root',
        password: 'sazzad',
        database: 'Test1',
        entities: [User],
        synchronize: false,
	}),TypeOrmModule.forFeature([User])
	],
  providers: [AdminService],
  controllers: [UserController]

})

export class DatabaseModulemosque {}
