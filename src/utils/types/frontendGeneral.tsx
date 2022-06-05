import { Dispatch, SetStateAction } from 'react'
import { Category } from '../../mongo/models/category'
import { Item, PopulatedItem } from '../../mongo/models/item'

export type sortingType = 'grid' | 'list'

export type listAddItem = 'custom' | 'existing'

export interface ItemsQueryParams {
  page: number
}

export interface MainViewProps {
  items: PopulatedItem[]
  itemsCount: number
  categories?: Category[]
  setItems?: Dispatch<SetStateAction<PopulatedItem[]>>
}
