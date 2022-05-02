import { Item, ItemModel } from '../mongo/models/item'
import { ITEMS_QUERY_LIMIT } from '../utils/constants'

const limit = ITEMS_QUERY_LIMIT
export async function fetchItems(skip: number): Promise<Item[]> {
  const items = await ItemModel.find()
    .skip(skip)
    .limit(4)

  return items
}

export async function fetchItemsCount(): number{
  const itemsCount = await ItemModel.count()
  return itemsCount
}
