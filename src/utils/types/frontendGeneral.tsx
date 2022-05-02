export interface ItemProps {
  id: string
  name: string
  description: string
  imageUrl: string
}

export type sortingType = 'grid' | 'list'

export interface ItemsQueryParams {
  page: number
}

export interface MainViewProps {
  items?: ItemProps[]
  itemsCount: number | undefined
}
