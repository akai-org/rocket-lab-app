import { Schema, models, model, Model } from 'mongoose'

export interface Item {
  name: string
  imageUrl: string
  description: string
  toBuy: boolean
}

const itemSchema = new Schema<Item>({
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
  (models.Item as Model<Item>) || model<Item>('Item', itemSchema)
