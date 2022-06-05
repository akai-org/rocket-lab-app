import { Schema, Model, models, model } from 'mongoose'
import { Item, PopulatedItem } from './item'

export interface CartList {
  id: string
  quantity: number
  items: { item: Schema.Types.ObjectId }[]
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  quantity: number
  id: string
  item?: PopulatedItem | Item
}

export interface PopulatedCartList extends Omit<CartList, 'items'> {
  items: CartItem[]
}

const CartItemSchema = new Schema<CartItem>({
  quantity: {
    type: Number,
    required: [true, 'Cart item quantity must be provided'],
    min: 1,
    max: 666,
  },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: [true, 'You must specify item id'],
  },
})

const CartListSchema = new Schema<CartList>(
  {
    name: { type: String, required: [true, 'Cart list name must be provided'] },
    items: [CartItemSchema],
  },
  { timestamps: true }
)

export const CartListModel =
  (models.CartList as Model<CartList>) || model('CartList', CartListSchema)
