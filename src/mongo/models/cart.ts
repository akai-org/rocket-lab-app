import { Schema, Model, models, model } from 'mongoose'

export interface CartItem {
  id: string
  quantity: number
  item: Schema.Types.ObjectId
}

const cartItemSchema = new Schema<CartItem>({
  quantity: { type: Number, default: 1, min: 1 },
  item: {
    type: Schema.Types.ObjectId,
    ref: 'Item',
    required: [true, 'You must specify item id'],
  },
})

export const CartItemModel =
  (models.cartItem as Model<CartItem>) || model('CartItem', cartItemSchema)
