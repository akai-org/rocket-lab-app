import { Schema, models, model, Model } from 'mongoose'

export interface Item {
  name: string
  imageUrl: string
  description: string
  toBuy: boolean
  id: Schema.Types.ObjectId
  categories: Schema.Types.ObjectId[]
  quantity: number
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
  quantity: {type: Number, default: 1, min: 1, max: 1000000},
  categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
})

export const ItemModel =
  (models.Item as Model<Item>) || model<Item>('Item', itemSchema)
