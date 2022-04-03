import mongoose from 'mongoose'

export interface Item {
  name: string
  imageUrl: string
  description: string
  toBuy: boolean
}

const itemSchema = new mongoose.Schema<Item>({
  name: { type: String, required: [true, "You must specify item's name"] },
  imageUrl: {
    type: String,
    required: [true, 'You must specify imageUrl'],
  },
  description: { type: String, default: '' },
  toBuy: {
    type: Boolean,
    default: false,
  },
})
export const ItemModel =
  (mongoose.models.Item as mongoose.Model<Item>) ||
  mongoose.model<Item>('Item', itemSchema)
