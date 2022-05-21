import { CartItemModel } from '../mongo/models/cart'
import { Item } from '../mongo/models/item'

export interface FutureCartItem {
    id: string
    quantity: number
}

export async function createNewCart(cartName: string, cartItems: string[]) {
    const newCartItem = await CartItemModel.create({name: cartName, })
}
