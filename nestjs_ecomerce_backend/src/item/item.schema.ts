import * as mongoose from 'mongoose';

export const ItemSchema = new mongoose.Schema({
  item_name: String,
  price: Number,
  image_url: String,
});
