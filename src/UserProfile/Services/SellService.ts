import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AddUserDto, UpdateUserDto } from '../Dto/Admindd';
import { User } from '../Entity/Admin';
import { ProductEntity } from '../Entity/Product.Entity';
import { SellsEntity } from '../Entity/selltable';
import { ProfitEntity } from '../Entity/ProfitTable';
import { SellsDto } from '../Dto/SellsDto';
import { ProductDto } from '../Dto/Product.Dto';
import { ProfitDto } from '../Dto/ProfitDto';

@Injectable()
export class SellService {
    constructor(
        @InjectRepository(ProductEntity)
        private readonly product: Repository<ProductEntity>,
        @InjectRepository(SellsEntity)
        private readonly sell: Repository<SellsEntity>,
        @InjectRepository(ProfitEntity)
        private readonly profit: Repository<ProfitEntity>,
    ) {
    }
    async findAllProduct(): Promise<ProductEntity[]> {
        var data = await this.product.find();
        return data;
    }
    async findAllSelled(): Promise<SellsEntity[]> {
        var data = await this.sell.find();
        return data;
    }
    async findAllProfits(): Promise<ProfitEntity[]> {
        var data = await this.profit.find();
        return data;
    }
    async CountTotalProduct(): Promise<number> {
        var data = await this.product.count();
        return data;
    }
    async CountTotalSelled(): Promise<number> {
        var data = await this.sell.count();
        return data;
    }
    async totalProfit(): Promise<number> {
        var data = await this.profit.find();
        var total = 0;
        for (let i = 0; i < data.length; i++) {
            total = total + data[i].Profit;
        }
        return total;
    }
    async totalLoss(): Promise<number> {
        var data = await this.profit.find();
        var total = 0;
        for (let i = 0; i < data.length; i++) {
            if (data[i].ProfitorLoss == "Loss") {
                total = total + data[i].Profit;
            }
        }
        return total;
    }

    async sellproduct(sell:SellsDto) {
        var product = await this.product.findOne({ where: { ProductId: sell.ProductId } });
        console.log(product);
        if (product==null) {
            throw new NotFoundException("Product not found");
        }
        if (product.ProductQuantity < sell.ProductQuantity) {
            throw new BadRequestException("Product Quantity not available");
        }
        var sellproduct = new SellsDto();
      
        sellproduct.ProductId = product.ProductId;
        sellproduct.ProductName = product.ProductName;
        sellproduct.ProductDescription = product.ProductDescription;
        sellproduct.ProductPrice = product.ProductPrice;
        sellproduct.ProductImage = product.ProductImage;
        sellproduct.ProductCategory = product.ProductCategory;
        sellproduct.ProductQuantity = product.ProductQuantity;
        sellproduct.Buyingrice = product.ProductPrice;
        sellproduct.BuyingDate = product.BuyingDate;
        sellproduct.Sellingrice = sell.ProductPrice;
        sellproduct.SellingDate = new Date();
        console.log("debugger");
        await this.sell.save(sellproduct);

        product.ProductQuantity = product.ProductQuantity - sell.ProductQuantity;
        await this.product.save(product);
      
        var profit = new ProfitDto();
        profit.ProductId = product.ProductId;
        profit.ProductName = product.ProductName;
        profit.Buydate = product.BuyingDate;
        profit.sellDate = new Date();
        profit.Profit = sell.ProductPrice - product.ProductPrice;
        if(profit.Profit<0)
        {
            profit.ProfitorLoss="Loss"
        }
        else{
            profit.ProfitorLoss="Profit"
        }

        await this.profit.save(profit);
      
}

async addproduct(product:ProductDto) {
    
    await this.product.save(product);}
    async updateproduct(product:ProductEntity) {
        var product = await this.product.findOne({ where: { ProductId: product.ProductId } });
        if (product==null) {
            throw new NotFoundException("Product not found");
        }
        await this.product.save(product);
    }
    async GetProfitByMonth(month:Date) {
        var data = await this.profit.find({ where: { sellDate: month } });
        return data;
    }
    async GetProfitByYear(year:Date) {
        var data = await this.profit.find({ where: { sellDate: year } });
        return data;
    }
    async getsellbydate(date:Date) {
        var data = await this.sell.find({ where: { SellingDate: date } });
        return data;
    }
    async getpurchasebydate(date:Date) {
        var data = await this.product.find({ where: { BuyingDate: date } });
        return data;
    }

}
