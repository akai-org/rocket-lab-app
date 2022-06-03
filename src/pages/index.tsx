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
import { API_URL, FIRST_PAGE, ITEMS_QUERY_LIMIT } from '../utils/constants'
import { fetchCategories } from '../services/categoryService'
import { SortType } from '../services/itemsService'
import { useEffect } from 'react'
import {
  clearCart,
  setExistingCartLists,
} from '../store/Slices/storageCartSlice'
import { fetcher } from '../utils/requests'
import { useDispatch } from 'react-redux'
import { setCategories } from '../store/Slices/categoriesSlice'

interface Props extends MainViewProps {
  error?: Error
}

const Home: NextPage<Props> = ({ items, error, itemsCount, categories }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCategories(categories || []))
    fetcher(API_URL + '/api/cart')
      .then((data) => {
        console.log(data)
        dispatch(setExistingCartLists(data))
      })
      .catch((error) => console.log(error))
  }, [])

  const [isDesktop] = useMediaQuery('(min-width: 900px)')

  const Storage = isDesktop ? (
    <DesktopStorage itemsCount={itemsCount} items={items ?? []} />
  ) : (
    <MobileStorage itemsCount={itemsCount} items={items ?? []} />
  )
  console.log(items)

  return !error ? Storage : <Text>{error.message}</Text>
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

      const page = query.page ? +query.page : FIRST_PAGE
      const toDisplay = query.toDisplay ? +query.toDisplay : ITEMS_QUERY_LIMIT
      const category = query.category
      const searchTerm = query.searchTerm as string | undefined

      const skip = (page - FIRST_PAGE) * toDisplay

      const sort = query.sort as SortType | undefined

      const items = await itemsService.fetchItems(skip, toDisplay, {
        category: category as string | undefined,
        searchTerm,
        sort,
      })

      const itemsCount = await itemsService.fetchItemsCount()

      const categories = await fetchCategories()

      return {
        props: {
          items: JSON.parse(JSON.stringify(items)),
          itemsCount: JSON.parse(JSON.stringify(itemsCount)),
          categories: JSON.parse(JSON.stringify(categories)),
        },
      }
    } catch (e) {
      console.log(e)
      return {
        props: {
          error: JSON.parse(JSON.stringify(e)),
        },
      }
    }
  },
})
