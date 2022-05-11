import { Category } from '../../mongo/models/category'
import { Item } from '../../mongo/models/item'

export type sortingType = 'grid' | 'list'

export interface ItemsQueryParams {
  page: number
}

export interface MainViewProps {
  items?: Item[]
  itemsCount?: number
  categories?: Category[]
}
