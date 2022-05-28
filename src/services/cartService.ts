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
  console.log('chuj')
  const mappedItems = items.map((item) => ({
    quantity: item.quantity,
    item: item.item.id,
  }))
  console.log(mappedItems)
  return await CartListModel.updateOne({ _id: id }, { items: mappedItems })
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
