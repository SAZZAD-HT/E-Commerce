import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { ProductEntity } from '../Entity/Product.Entity';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(ProductEntity)
        private readonly repo: Repository<ProductEntity>,
    ) {}
    
    async findAll(): Promise<ProductEntity[]> {
        var data=await this.repo.find();
        return data;
    }
    
    async create(user: ProductEntity): Promise<ProductEntity> {
        return await this.repo.save(user);
    }
    
    async update(id: number, user: ProductEntity): Promise<void> {
        await this.repo.update(id, user);
    }
    
    async delete(id: number): Promise<void> {
        console.log("delete Service"+id);
        await this.repo.delete(id);
    }
   
}

