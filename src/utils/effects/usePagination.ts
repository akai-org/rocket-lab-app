import { useRouter } from 'next/router'
import { ChangeEvent } from 'react'
import { useSelector } from 'react-redux'
import { itemsInfo } from 'store'
import { FIRST_PAGE, ITEMS_QUERY_LIMIT } from '../constants'
import queryString from 'query-string'

export function usePagination(): {
  minPage: number
  maxPage: number
  previousPage: number
  nextPage: number
  itemsCount: number
  toDisplay: number
  currentPage: number
  query: object
  onToDisplayChange: (e: ChangeEvent<HTMLSelectElement>) => void
} {
  const sanitizePage = (
    page: number,
    toDisplay: number,
    itemsCount: number
  ) => {
    const maxPage = Math.ceil(itemsCount / toDisplay)
    let sanitizedPage = page
    if (page < FIRST_PAGE) {
      sanitizedPage = FIRST_PAGE
    } else if (page > maxPage) {
      sanitizedPage = maxPage
    }
    return sanitizedPage
  }

  const itemsCount = useSelector(itemsInfo).displayItems.length

  const router = useRouter()
  const query = queryString.parseUrl(router.asPath).query

  const presumedToDisplay = query.toDisplay

  const toDisplay = presumedToDisplay ? +presumedToDisplay : ITEMS_QUERY_LIMIT

  const currentPage = query.page ? +query.page : FIRST_PAGE

  const presumedNextPage = currentPage + FIRST_PAGE
  const presumedPreviousPage = currentPage - FIRST_PAGE

  const minPage = FIRST_PAGE
  const maxPage = Math.ceil(itemsCount / toDisplay)

  const nextPage = sanitizePage(presumedNextPage, toDisplay, itemsCount)
  const previousPage = sanitizePage(presumedPreviousPage, toDisplay, itemsCount)

  const onToDisplayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newToDisplay = +e.target.value

    let page = currentPage

    if (newToDisplay !== toDisplay) {
      const passedItems = toDisplay * page
      const toPassedItems = passedItems - toDisplay + newToDisplay
      page = Math.round(toPassedItems / newToDisplay)
    }
    page = sanitizePage(page, newToDisplay, itemsCount)
    router.push({ query: { ...query, page, toDisplay: newToDisplay } })
  }

  return {
    minPage,
    maxPage,
    previousPage,
    nextPage,
    onToDisplayChange,
    itemsCount,
    toDisplay,
    currentPage,
    query,
  }
}
