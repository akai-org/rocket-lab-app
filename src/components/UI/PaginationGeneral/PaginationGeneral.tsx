import { useRouter } from 'next/router'
import React, { ChangeEvent, FC } from 'react'
import { ITEMS_QUERY_LIMIT, FIRST_PAGE } from '../../../utils/constants'

export interface PaginationSettings {
  handleOnChangeQuantity: (e: ChangeEvent<HTMLSelectElement>) => void
  minPage: number
  maxPage: number
  nextPage: number
  previousPage: number
  toDisplay: number
}

interface Props {
  itemsCount?: number
  paginationSettings: React.FC<PaginationSettings>
}

export const PaginationGeneral: FC<Props> = (props) => {
  const sanitizePage = (toDisplay: number, page: number) => {
    const maxPage = Math.ceil(itemsCount / toDisplay)
    let sanitizedPage = page
    if (page < FIRST_PAGE) {
      sanitizedPage = FIRST_PAGE
    } else if (page > maxPage) {
      sanitizedPage = maxPage
    }
    return sanitizedPage
  }

  const Display = props.paginationSettings

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

  const nextPage = sanitizePage(presumedNextPage, toDisplay)
  const previousPage = sanitizePage(presumedPreviousPage, toDisplay)

  const onToDisplayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newToDisplay = +e.target.value

    let page = currentPage

    if (newToDisplay !== toDisplay) {
      const passedItems = toDisplay * page
      const toPassedItems = passedItems - toDisplay + newToDisplay
      page = Math.round(toPassedItems / newToDisplay)
    }
    page = sanitizePage(newToDisplay, page)
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
