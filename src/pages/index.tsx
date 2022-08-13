import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { MainViewProps } from 'utils'
import { MobileStorage, DesktopStorage } from 'ui/modules'
import { useMediaQuery } from '@chakra-ui/react'
import { connectDB } from 'mongo'
import { Text } from '@chakra-ui/react'
import * as itemsService from '../services/itemsService'
import { fetchCategories } from 'services'
import { useEffect, useState } from 'react'
import { fetcher, API_URL, Credentials } from 'utils'
import { setCategories, setExistingCartLists } from 'store'
import { useDispatch, useSelector } from 'react-redux'
import {
  setCategory,
  setItems,
  setSearchTerm,
  setSorting,
  itemsInfo,
} from 'store'
import { PopulatedItem } from 'mongo'

interface Props extends MainViewProps {
  error?: Error
  page: number
  toDisplay: number
  sort: itemsService.SortType
  category?: string
  searchTerm?: string
}

const Home: NextPage<Props> = ({
  items,
  error,
  itemsCount,
  categories,
  page,
  toDisplay,
  sort,
  category,
  searchTerm,
}) => {
  const dispatch = useDispatch()
  const reduxItems = useSelector(itemsInfo).displayItems
  const [localItems, setLocalItems] = useState<PopulatedItem[]>(
    [...reduxItems].splice(0, toDisplay)
  )

  const desktopItems = reduxItems

  useEffect(() => {
    dispatch(setCategories(categories || []))
    fetcher(API_URL + '/api/cart')
      .then((data) => {
        dispatch(setExistingCartLists(data))
      })
      .catch((error) => console.log(error))
  }, [])

  useEffect(() => {
    dispatch(setItems(items || []))
  }, [])

  useEffect(() => {
    dispatch(setSorting(sort))
  }, [dispatch, sort])

  useEffect(() => {
    dispatch(setCategory(category))
  }, [category, dispatch])

  useEffect(() => {
    dispatch(setSearchTerm(searchTerm))
  }, [dispatch, searchTerm])

  const [isDesktop] = useMediaQuery('(min-width: 900px)')

  let processedToDisplay: number = toDisplay

  if (toDisplay * page > itemsCount) {
    processedToDisplay = itemsCount - (page - 1) * toDisplay
  }

  const Storage = isDesktop ? (
    <DesktopStorage
      itemsCount={itemsCount}
      items={[...desktopItems].splice(
        (page - 1) * toDisplay,
        processedToDisplay
      )}
    />
  ) : (
    <MobileStorage
      setItems={setLocalItems}
      itemsCount={itemsCount}
      items={localItems}
    />
  )

  return error ? <Text>{error.message}</Text> : Storage
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({
    req,
    res,
    query,
  }): Promise<{ props: Props }> => {
    try {
      await connectDB()
      await Credentials.withReader(req, res)

      const items = await itemsService.fetchAllItems()

      const itemsCount = await itemsService.fetchItemsCount()

      const categories = await fetchCategories()

      const page = query.page || 1
      const toDisplay = query.toDisplay || 15
      const category = query.category
      const searchTerm = query.searchTerm

      const sort = (query.sort || 'newest') as itemsService.SortType

      return {
        props: {
          sort: JSON.parse(JSON.stringify(sort)),
          page: JSON.parse(JSON.stringify(+page)),
          toDisplay: JSON.parse(JSON.stringify(+toDisplay)),
          items: JSON.parse(JSON.stringify(items)),
          itemsCount: JSON.parse(JSON.stringify(itemsCount)),
          categories: JSON.parse(JSON.stringify(categories)),
          category: category
            ? JSON.parse(JSON.stringify(category as string))
            : null,
          searchTerm: searchTerm
            ? JSON.parse(JSON.stringify(searchTerm as string))
            : null,
        },
      }
    } catch (e) {
      console.log(e)
      return {
        props: {
          sort: JSON.parse(JSON.stringify('newest')),
          page: JSON.parse(JSON.stringify(1)),
          toDisplay: JSON.parse(JSON.stringify(15)),
          itemsCount: 0,
          items: [],
          error: JSON.parse(JSON.stringify(e)),
        },
      }
    }
  },
})
