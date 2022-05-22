import { CartListModel } from '../mongo/models/cart'

export interface FutureCartItem {
  item: string
  quantity: number
}

export async function createNewCartList(
  cartName: string,
  cartItems: FutureCartItem[]
) {
  const newCartItem = await CartListModel.create({
    name: cartName,
    items: cartItems,
  })

  return newCartItem
}

export async function fetchCartLists(populated: boolean){
  const cartListsQuery = CartListModel.find()

  if(populated){
    return await cartListsQuery.populate('items')
  }
  else PageTransitionEvent
}
