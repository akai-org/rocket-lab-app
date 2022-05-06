import { Item, ItemModel } from '../mongo/models/item'
import { ITEMS_QUERY_LIMIT } from '../utils/constants'

export async function fetchItems(
  skip = 0,
  limit: number = ITEMS_QUERY_LIMIT
): Promise<Item[]> {
  const items = await ItemModel.find().skip(skip).limit(limit)

  return items
}

export async function fetchItemsCount(): Promise<number> {
  const itemsCount = await ItemModel.count()
  return itemsCount
}
