import { memo } from 'react'
import { sortingType } from 'utils'
import { PaginationGeneral } from 'ui/components'
import { PaginationControlls } from './PaginationControlls'

export const Pagination: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
  itemsCount?: number
}> = memo((props) => {
  return (
    <PaginationGeneral itemsCount={props.itemsCount}>
      {(controlls) => <PaginationControlls {...controlls} {...props} />}
    </PaginationGeneral>
  )
})
