import React from 'react'
import { sortingType } from '../../../../../../utils/types/frontendGeneral'
import { PaginationGeneral } from 'ui/components'
import { PaginationControlls } from './PaginationControlls'

export const Sorting: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
  itemsCount?: number
}> = (props) => {
  return (
    <PaginationGeneral itemsCount={props.itemsCount}>
      {(controlls) => <PaginationControlls {...controlls} {...props} />}
    </PaginationGeneral>
  )
}
