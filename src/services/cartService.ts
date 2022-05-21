import { CartItemModel } from '../mongo/models/cart'
import { Item } from '../mongo/models/item'

export interface FutureCartItem {
  item: string
  quantity: number
}

export async function createNewCart(
  cartName: string,
  cartItems: FutureCartItem[]
) {
  const newCartItem = await CartItemModel.create({
    name: cartName,
    items: cartItems,
  })

  return newCartItem
}
