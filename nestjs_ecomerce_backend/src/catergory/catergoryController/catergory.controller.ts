/* eslint-disable @typescript-eslint/no-empty-function */
import { Body, Controller, Get, Post } from '@nestjs/common';
import { CatergoryDto } from 'src/dto/catergory.dto';
import { CatergoryService } from '../catergoryService/catergory.service';

@Controller('catergory')
export class CatergoryController {
  constructor(private catergoryService: CatergoryService) {}
  @Post('')
  creatCatergory(@Body() catergory: CatergoryDto) {
    return this.catergoryService.createCatergory(catergory);
  }

  @Get('')
  test() {
    return 'catergory works !';
  }
}
