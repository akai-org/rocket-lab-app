import { Item, ItemModel } from '../mongo/models/item'
import { QUERY_LIMIT } from '../utils/constants'

export async function fetchItems(skip: number): Promise<Item[]> {
  const items = await ItemModel.find()
    .skip(skip)
    .limit(+(process.env.API_MONGODB_LIMIT ?? QUERY_LIMIT))

  return items
}
