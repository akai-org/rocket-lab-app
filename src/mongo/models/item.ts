import { Schema, models, model, Model } from 'mongoose'
import { Category } from './category'

export interface Item {
  name: string
  imageUrl: string
  description: string
  id: string
  categories: string[]
  quantity: number
  createdAt: Date
  updatedAt: Date
}

export interface PopulatedItem extends Omit<Item, 'categories'> {
  categories: Category[]
}

const itemSchema = new Schema<Item>(
  {
    name: { type: String, required: [true, "You must specify item's name"] },
    imageUrl: {
      type: String,
      required: [true, 'You must specify imageUrl'],
    },
    description: { type: String, default: '' },
    quantity: { type: Number, default: 1, min: 1, max: 1000000 },
    categories: [{ type: Schema.Types.ObjectId, ref: 'Category' }],
  },
  { timestamps: true }
)

export const ItemModel =
  (models.Item as Model<Item>) || model<Item>('Item', itemSchema)
