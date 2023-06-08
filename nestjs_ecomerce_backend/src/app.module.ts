import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemModule } from './item/item.module';
import { SharedModule } from './shared/shared.module';
import { CatergoryModule } from './catergory/catergory.module';

const MONGO_URI =
  'mongodb://localhost:27017/?readPreference=primary&appname=MongoDB%20Compass&ssl=false';
@Module({
  imports: [
    ItemModule,
    SharedModule,
    MongooseModule.forRoot(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }),
    CatergoryModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
