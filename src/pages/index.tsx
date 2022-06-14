import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { MainViewProps } from '../utils/types/frontendGeneral'
import MobileStorage from '../components/Storage/MobileStorage/MobileStorage'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopStorage from '../components/Storage/DesktopStorage/DesktopStorage'
import { connectDB } from '../mongo/db'
import { Text } from '@chakra-ui/react'
import * as itemsService from '../services/itemsService'
import { Credentials } from '../utils/credentials'
import { API_URL } from '../utils/constants'
import { fetchCategories } from '../services/categoryService'
import { useEffect, useState } from 'react'
import { setExistingCartLists } from '../store/Slices/storageCartSlice'
import { fetcher } from '../utils/requests'
import { setCategories } from '../store/Slices/categoriesSlice'
import { useDispatch, useSelector } from 'react-redux'
import { resortItems, setItems } from '../store/Slices/itemsSlice'
import { PopulatedItem } from '../mongo/models/item'
import { useRouter } from 'next/router'
import { itemsInfo } from '../store/store'

interface Props extends MainViewProps {
  error?: Error
  page: number
  toDisplay: number
  sort: itemsService.SortType
}

const Home: NextPage<Props> = ({
  items,
  error,
  itemsCount,
  categories,
  page,
  toDisplay,
  sort
}) => {
  const dispatch = useDispatch()
  const reduxItems = useSelector(itemsInfo).items
  const [localItems, setLocalItems] = useState<PopulatedItem[]>(
    [...reduxItems].splice(page - 1, toDisplay)
  )

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
    console.log(sort)
    dispatch(resortItems(sort))
  }, [sort])

  const [isDesktop] = useMediaQuery('(min-width: 900px)')

  let processedToDisplay: number = toDisplay

  if (toDisplay * page > itemsCount) {
    processedToDisplay = itemsCount - (page - 1) * toDisplay
  }

  const Storage = isDesktop ? (
    <DesktopStorage
      itemsCount={itemsCount}
      items={[...reduxItems].splice((page - 1) * toDisplay, processedToDisplay)}
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

      const sort = (query.sort || 'newest') as itemsService.SortType

      return {
        props: {
          sort: JSON.parse(JSON.stringify(sort)),
          page: JSON.parse(JSON.stringify(+page)),
          toDisplay: JSON.parse(JSON.stringify(+toDisplay)),
          items: JSON.parse(JSON.stringify(items)),
          itemsCount: JSON.parse(JSON.stringify(itemsCount)),
          categories: JSON.parse(JSON.stringify(categories)),
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
