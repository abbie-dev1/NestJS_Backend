import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CatergorySchema } from './catergory.schema';
import { CatergoryService } from './catergoryService/catergory.service';
import { CatergoryController } from './catergoryController/catergory.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Catergory', schema: CatergorySchema }]),
    SharedModule,
  ],
  providers: [CatergoryService],
  controllers: [CatergoryController],
})
export class CatergoryModule {}
