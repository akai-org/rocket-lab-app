import { useRouter } from 'next/router'
import { ChangeEvent, FC } from 'react'
import { ITEMS_QUERY_LIMIT, FIRST_PAGE } from '../../../utils/constants'

export interface PaginationSettings {
  handleOnChangeQuantity: (e: ChangeEvent<HTMLSelectElement>) => void
  minPage: number
  maxPage: number
  nextPage: number
  previousPage: number
  toDisplay: number
  itemsCount: number
}

interface Props {
  itemsCount?: number
  children: (controls: PaginationSettings) => JSX.Element
}

export const PaginationGeneral: FC<Props> = (props) => {
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

  const router = useRouter()
  const query = router.query

  const presumedToDisplay = query.toDisplay

  const toDisplay = presumedToDisplay ? +presumedToDisplay : ITEMS_QUERY_LIMIT

  const currentPage = query.page ? +query.page : FIRST_PAGE

  const itemsCount = props.itemsCount ?? 1

  const presumedNextPage = currentPage + FIRST_PAGE
  const presumedPreviousPage = currentPage - FIRST_PAGE

  const minPage = FIRST_PAGE
  const maxPage = Math.ceil(itemsCount / toDisplay)

  const nextPage = sanitizePage(presumedNextPage, toDisplay, itemsCount)
  const previousPage = sanitizePage(presumedPreviousPage, toDisplay, itemsCount)

  const onToDisplayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newToDisplay = +e.target.value

    let page = currentPage

    const router = useRouter()

    const query = router.query

    if (newToDisplay !== toDisplay) {
      const passedItems = toDisplay * page
      const toPassedItems = passedItems - toDisplay + newToDisplay
      page = Math.round(toPassedItems / newToDisplay)
    }
    page = sanitizePage(page, newToDisplay, itemsCount)
    router.push({ query: { ...query, page, toDisplay: newToDisplay } })
  }

  return props.children({
    handleOnChangeQuantity: onToDisplayChange,
    itemsCount,
    maxPage,
    minPage,
    nextPage,
    previousPage,
    toDisplay,
  })
}
