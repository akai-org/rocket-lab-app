import { Schema, Model, models, model } from 'mongoose'
import { PopulatedItem } from './item'

export interface CartList {
  id: string
  quantity: number
  items: { item: Schema.Types.ObjectId }[]
  customItems: CustomCartItem[]
  name: string
  createdAt: Date
  updatedAt: Date
}

export interface CartItem {
  quantity: number
  id: string
  item?: PopulatedItem
}

export interface CustomCartItem {
  quantity: number
  item: { name: string; description: string; id: string }
  id: string
}

export interface PopulatedCartList extends Omit<CartList, 'items'> {
  items: CartItem[]
}

const CustomCartItemSchema = new Schema({
  quantity: {
    type: Number,
    min: 1,
    max: 666,
    required: [true, 'Cart item quantity must be provided'],
  },
  item: {
    name: { type: String, required: [true, 'Item name must be provided'] },
    description: { type: String, default: '' },
  },
})

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
    customItems: [CustomCartItemSchema],
  },
  { timestamps: true }
)

export const CartListModel =
  (models.CartList as Model<CartList>) || model('CartList', CartListSchema)
