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

export async function updateCartList(
  id: string,
  items: CartItem[],
  name: string
) {
  const mappedItems = items.map((item) => ({
    quantity: item.quantity,
    item: item.item?.id,
  }))
  return await CartListModel.findOneAndUpdate(
    { _id: id },
    { items: mappedItems, name },
    { new: true }
  ).populate('items.item')
}

export async function fetchCartLists(populate?: boolean) {
  if (populate) {
    return await CartListModel.find()
      .sort({ createdAt: -1 })
      .populate('items.item')
  } else {
    return await CartListModel.find().sort({ createdAt: -1 })
  }
}

export async function removeCartListItem(listId: string, itemId: string) {
  return await CartListModel.findByIdAndUpdate(listId, {
    $pull: {
      items: {
        item: itemId,
      },
    },
  }).populate('items')
}
