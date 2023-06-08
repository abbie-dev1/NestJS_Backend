import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ItemSchema } from 'src/item/item.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
  exports: [MongooseModule.forFeature([{ name: 'Item', schema: ItemSchema }])],
})
export class SharedModule {}
