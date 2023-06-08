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
