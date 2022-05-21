import { Schema, Model, models, model } from 'mongoose'

export interface CartList {
  id: string
  quantity: number
  items: { item: Schema.Types.ObjectId }
  name: string
  createdAt: Date
  updatedAt: Date
}

const CartListSchema = new Schema<CartList>(
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
  (models.CartList as Model<CartList>) || model('CartList', CartListSchema)
