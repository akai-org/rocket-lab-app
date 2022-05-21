import { Schema, Model, models, model } from 'mongoose'

export interface CartItem {
  id: string
  quantity: number
  items: { item: Schema.Types.ObjectId }
  name: string
  createdAt: Date
  updatedAt: Date
}

const cartItemSchema = new Schema<CartItem>(
  {
    name: { type: String, required: [true, 'Cart list name must be provided'] },
    items: [
      {
        item: {
          type: Schema.Types.ObjectId,
          ref: 'Item',
          required: [true, 'You must specify item id'],
        },
        quantity: { type: Number, default: 1, min: 1, max: 1000000 },
      },
    ],
  },
  { timestamps: true }
)

export const CartItemModel =
  (models.CartItem as Model<CartItem>) || model('CartItem', cartItemSchema)
