import { Item, ItemModel } from '../mongo/models/item'
import { ITEMS_QUERY_LIMIT } from '../utils/constants'
import { FilterQuery } from 'mongoose'

export async function fetchItems(
  skip = 0,
  limit: number = ITEMS_QUERY_LIMIT,
  category?: string
): Promise<Item[]> {
  if (category) {
    return await ItemModel.aggregate([
      {
        $lookup: {
          from: 'categories',
          localField: 'categories',
          foreignField: '_id',
          as: 'searchedCategory',
        },
      },
      { $unwind: '$searchedCategory' },
      {
        $match: {
          'searchedCategory.name': category,
        },
      },
      {
        $addFields: {
          id: '$_id',
        },
      },
    ])
      .skip(skip)
      .limit(limit)
  } else {
    return await ItemModel.find().skip(skip).limit(limit)
  }
}

export async function fetchItemsCount(): Promise<number> {
  const itemsCount = await ItemModel.count()
  return itemsCount
}
