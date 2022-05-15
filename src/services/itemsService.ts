import { Item, ItemModel } from '../mongo/models/item'
import { ITEMS_QUERY_LIMIT } from '../utils/constants'

export async function fetchItems(
  skip = 0,
  limit: number = ITEMS_QUERY_LIMIT,
  filterOptions?: { category?: string; searchTerm?: string }
): Promise<Item[]> {
  let items
  const match: {
    'searchedCategory.name'?: string
    $or?: object[]
  } = {}
  if (filterOptions?.category) {
    match['searchedCategory.name'] = filterOptions.category
  }

  if (filterOptions?.searchTerm) {
    match.$or = []
    const regex = new RegExp(filterOptions.searchTerm)
    match.$or.push({ name: { $regex: regex } })
    match.$or.push({ description: { $regex: regex } })
  }

  const parseCategory = [
    {
      $lookup: {
        from: 'categories',
        localField: 'categories',
        foreignField: '_id',
        as: 'searchedCategory',
      },
    },
    { $unwind: '$searchedCategory' },
  ]

  const queryBody = [
    {
      $match: match,
    },
    {
      $addFields: {
        id: '$_id',
      },
    },
  ]

  const filterAlwaysByCategory =
    (filterOptions?.category && filterOptions?.searchTerm) ||
    filterOptions?.category

  const filterBySearch = filterOptions?.searchTerm

  if (filterAlwaysByCategory) {
    items = ItemModel.aggregate([...parseCategory, ...queryBody])
  } else if (filterBySearch) {
    items = ItemModel.aggregate([...queryBody])
  } else {
    items = ItemModel.find()
  }
  return await items.skip(skip).limit(limit)
}

export async function fetchItemsCount(): Promise<number> {
  const itemsCount = await ItemModel.count()
  return itemsCount
}
