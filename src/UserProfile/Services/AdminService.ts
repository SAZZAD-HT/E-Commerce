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
    async findeOne(UserId: number): Promise<User> {
        return await this.repo.findOneBy({UserId});
    }
    
    async findemail(UserEmail: string): Promise<User> {
        return await this.repo.findOneBy({UserEmail});
    }
    async findpassword(UserPassword: string): Promise<User> {
        return await this.repo.findOneBy({UserPassword});
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
    }
