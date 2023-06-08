<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo_text.svg" width="320" alt="Nest Logo" /></a>
</p>



  
## Description

[Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```
## NestJS routes stage 1( controller, routes and services)
```
For now we will use an array of items  as our database, then we will move the project to mongo and postgresSQL.

Array name = db

In src/app.controller.ts , you'll find the following routes

# /item . used for get and post

# /item/:id .  used for get item by id, delete item by id and update by id


item model
  {
    item_name: string;
    price: string;
    image_url: string;
    catergory: string
  }

  
```

# section 1
 1.
in app.controller.ts create an Interface and name it Item

```
  interface item{
  item_name:string;
  price:number;
  image_url:string;
}

```
2.
An array as follows
```
db: item[] = []; 
this array will be filled with objects of items
```

3.
Create a post request in app.controller.ts
```
@Post('item')
postItem(@Body() _item:item): any {
    this.db.push(_item)
    return 'post worked';
 }
```

4.
Create a get request in app.controller.ts

```
 @Get('item')
  getAllItems():item[]{
    return this.db;
  }

  now lets test on thunder client
  
  copy the following url and paste on thunder client/postman 

  Post -- localhost:3000/item
 {
    item_name: 'banna'
    price: 'apple',
    image_url: 'url',
    catergory: 'food'
  }

```

# section 2 (adding mongodb and communicating with frontend)

```
1. install mongoose using the following command
--- npm install --save @nestjs/mongoose mongoose

2. create 2 modules one called item and the other called shared
--- nest g mo item  
--- nest g mo shared

3. paste the following code into your app.module.ts

 MongooseModule.forRoot(MONGO_URI,{
      useNewUrlParser: true,
      useUnifiedTopology: true,
 })

 4. create a item/item.module.ts and item/item.schema.ts

 --item/item.module.ts

 import { Module } from '@nestjs/common';

@Module({
  imports: [],
})
export class ItemModule {}

--item/item.schema.ts
import * as mongoose from 'mongoose';
export const CatergorySchema = new mongoose.Schema({
  catergory_name: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});

5. create a item/item.module.ts and item/item.schema.ts

--item/catergory.schema.ts

import * as mongoose from 'mongoose';
export const CatergorySchema = new mongoose.Schema({
  catergory_name: String,
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
    },
  ],
});
```

 