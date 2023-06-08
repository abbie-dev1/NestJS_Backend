/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';


interface item{
  item_name:string;
  price:number;
  image_url:string;
}

@Controller()
export class AppController {

  //this db array represents the database
  db: item[] = []; 

  constructor(private readonly appService: AppService) {}

  /**
   * 
   * @param _item is the body passed from postman/thunder client in the form of json 
   * @returns 
   */

  @Post('item')
  postItem(@Body() _item:item): any {
    this.db.push(_item)
    return 'post worked';
  }

  /**
   * this method get all items stored in an array
  
   */
  @Get('item')
  getAllItems():item[]{
    return this.db;
  }

  /**
   * this method get a selected item based on the index
   * @param index passed through parameters in this format (localhost:3000/item/:index)
   * 
   */
  @Get('item/:index')
  getItem(@Param('index') index:number):item{
    return this.db[index];
  }

  /**
   * 
   * this method deletes a selected item based on the index
   * @param index passed through parameters in this format (localhost:3000/item/:index)
   */
  @Delete('item/:index')
  deleteItem(@Param('index') index:number):item[]{
    this.db.splice(index,1);
    return this.db;
  }

/**
 * 
 * @param _item is the body passed from postman/thunder client in the form of json  
 * @param index passed through parameters in this format (localhost:3000/item/:index) using put request
 * 
 */
  @Put('item/:index')
  updateItem(@Body() _item:item,@Param('index') index:number): any {
    this.db[index] = _item;
    return this.db;
  }

}
