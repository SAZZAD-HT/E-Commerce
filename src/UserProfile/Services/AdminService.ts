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
        await this.repo.delete(id);
    }
    async login(email: string, password: string): Promise<User> {
        return await this.repo.findOne({ where: { UserEmail: email, UserPassword: password } });
    }
}