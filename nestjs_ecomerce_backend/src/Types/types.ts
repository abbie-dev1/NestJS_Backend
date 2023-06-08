import { Document } from 'mongoose';

export interface item extends Document {
  item_name: string;
  price: number;
  image_url: string;
}
export interface Catergory extends Document {
  catergory_name: string;
  items?: item[];
}
