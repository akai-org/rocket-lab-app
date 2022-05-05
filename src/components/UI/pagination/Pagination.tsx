import { useRouter } from 'next/router'
import React, { ChangeEvent } from 'react'
import { ITEMS_QUERY_LIMIT, FIRST_PAGE } from '../../../utils/constants'

export interface Display {
  handleOnChangeQuantity: (e: ChangeEvent<HTMLSelectElement>) => void
  minPage: number
  maxPage: number
  nextPage: number
  previousPage: number
  toDisplay: number
}

interface Props {
  itemsCount?: number
  display: React.FC<Display>
}

export const Pagination = (props: Props) => {
  const Display = props.display

  const router = useRouter()
  const query = router.query

  const presumedToDisplay = query.toDisplay

  const toDisplay = presumedToDisplay ? +presumedToDisplay : ITEMS_QUERY_LIMIT

  const currentPage = query.page ? +(query.page as string) : FIRST_PAGE

  const itemsCount = props.itemsCount ?? 0

  const presumedNextPage = currentPage + FIRST_PAGE
  const presumedPreviousPage = currentPage - FIRST_PAGE

  const minPage = FIRST_PAGE
  const maxPage = Math.ceil(itemsCount / toDisplay)

  const nextPage = presumedNextPage <= maxPage ? presumedNextPage : maxPage
  const previousPage =
    presumedPreviousPage >= minPage ? presumedPreviousPage : minPage

  const onToDisplayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newToDisplay = +e.target.value

    let page = currentPage

    if (newToDisplay !== toDisplay) {
      const passedItems = toDisplay * page
      const toPassedItems = passedItems - toDisplay + newToDisplay
      page = Math.round(toPassedItems / newToDisplay)
    }

    router.push({ query: { page, toDisplay: newToDisplay } })
  }

  return (
    <Display
      handleOnChangeQuantity={onToDisplayChange}
      maxPage={maxPage}
      minPage={minPage}
      nextPage={nextPage}
      previousPage={previousPage}
      toDisplay={toDisplay}
    />
  )
}
