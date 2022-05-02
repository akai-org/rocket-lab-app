import { Item, ItemModel } from '../mongo/models/item'
import { QUERY_LIMIT } from '../utils/constants'

const limit = +(process.env.API_MONGODB_LIMIT ?? QUERY_LIMIT)
export async function fetchItems(skip: number): Promise<Item[]> {
  const items = await ItemModel.find()
    .skip(skip)
    .limit(4)

  return items
}
