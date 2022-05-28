import { CartItem, CartListModel } from '../mongo/models/cart'

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

export async function updateCartList(id: string, items: CartItem[]) {
  const mappedItems = items.map((item) => ({
    quantity: item.quantity,
    item: item.item.id,
  }))
  return await CartListModel.findOneAndUpdate(
    { _id: id },
    { items: mappedItems },
    { new: true }
  ).populate('items.item')
}

export async function fetchCartLists(populated: boolean) {
  // const cartListsQuery = CartListModel.find()

  // if(populated){
  //   return await cartListsQuery.populate('items')
  // }

  return await CartListModel.aggregate([
    {
      $lookup: {
        from: 'cartlists',
        localField: 'items.item',
        foreignField: '_id',
        as: 'items',
      },
    },
  ])
}
