/* eslint-disable @typescript-eslint/no-empty-function */
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Catergory, item } from 'src/Types/types';
import { CatergoryDto } from 'src/dto/catergory.dto';

@Injectable()
export class CatergoryService {
  constructor(
    @InjectModel('Catergory') private catergoryModel: Model<Catergory>,
    @InjectModel('Item') private itemModel: Model<item>,
  ) {}

  async createCatergory(_catergory: CatergoryDto) {
    this.itemModel.create(_catergory.items[0]);
    let items = [];
    this.itemModel.find().then((val: any[]) => {
      items = val;
      const my_catergory = {
        catergory_name: _catergory.catergory_name,
        items: items,
      };
      this.catergoryModel.create(my_catergory);
    });
    return this.catergoryModel.find();
  }
}
