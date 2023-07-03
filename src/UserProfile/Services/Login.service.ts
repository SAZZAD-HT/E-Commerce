import {
    Injectable,
    BadRequestException,
    NotFoundException,
  } from '@nestjs/common';

import { AdminService } from './AdminService';
import { User } from '../Entity/Admin';
import { Repository } from 'typeorm';
let temp=[];
  @Injectable()
  export class AuthService {
    constructor(private usersService: AdminService,
        private readonly repo: Repository<User>
        ) {}
    
    // findemail(UserEmail: string) {
    //     if(!UserEmail){
    //         console.log("email required");
    //         throw new BadRequestException('email required');

    //     }
    //     else{
    //         console.log("email found");
    //         return this.repo.findOneBy(UserEmail);
    //     }

    // }
    async signin(email: string, password: string) {
        const user = await this.usersService.findemail(email);
        if (!user) {
            console.log("User not found");
            throw new NotFoundException('User not found');
        }
        if (user.UserPassword !== password) {
            console.log("Invalid password");
            throw new BadRequestException('Invalid password');
        }

        return user;

    }
    
  }
  