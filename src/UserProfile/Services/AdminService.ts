import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';
import { AddUserDto } from '../Dto/Admindd';
import { User } from '../Entity/Admin';

@Injectable()
export class AdminService {

    constructor(
        @InjectRepository(User)
        private readonly repo: Repository<User>,
    ) {}
    
    async findAll(): Promise<User[]> {
        var data=await this.repo.find();
        return data;
    }
    
   

    async create(user: AddUserDto): Promise<User> {
        return await this.repo.save(user);
    }
    
    async update(id: number, user: User): Promise<void> {
        await this.repo.update(id, user);
    }
    
    async delete(id: number): Promise<void> {
        console.log("delete Service"+id);
        await this.repo.delete(id);
    }
    async login(loginData: { UserEmail: string; UserPassword: string }): Promise<string> {
        const { UserEmail, UserPassword } = loginData;
        if(loginData==null){
            console.log("nodata");
        }
        console.log("login Service");
        console.log(loginData);
        const admin = await this.repo.findOne({ where: { UserEmail }, select: ['UserId', 'UserPassword'] });
   
        if (!admin) {
          throw new Error('Logged ');
        }
    console.log(admin.UserPassword+" "+UserPassword)
        if (admin.UserPassword !== UserPassword) {

          throw new Error('Login Successful');
        }
    
       
        return admin.UserId.toString();
      }}
