import { Schema } from 'mongoose';

export const ProductSchema = new Schema({
  name: String,
  description: String,
  imageURL: String,
  price: Number,
  cant: Number,
  createdAt: { type: Date, default: Date.now },
});
