import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DesktopList from '../../components/List/DesktopList/DesktopList'
import MobileList from '../../components/List/MobileList/MobileList'
import { useMediaQuery } from '@chakra-ui/react'
import { PopulatedCartList } from '../../mongo/models/cart'
import { connectDB } from '../../mongo/db'
import { Credentials } from '../../utils/credentials'
import { fetchCartLists } from '../../services/cartService'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { storageCartInfo } from '../../store/store'
import { setExistingCartLists } from '../../store/Slices/storageCartSlice'
import { PopulatedItem } from '../../mongo/models/item'
import { fetchAllItems } from '../../services/itemsService'
import { setItems } from '../../store/Slices/itemsSlice'

// TO DO fetch data from DB
interface Props {
  items: PopulatedItem[]
  cartLists: PopulatedCartList[]
  error?: {}
}

export interface CartListsProps extends Pick<Props, 'cartLists'> {}

const Home: NextPage<Props> = ({ cartLists, items }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setExistingCartLists(cartLists))
    dispatch(setItems(items))
  }, [])

  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const List = isDesktop ? <DesktopList /> : <MobileList />
  return List
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

      const items = await fetchAllItems()
      const cartLists = await fetchCartLists(true)
      return {
        props: {
          cartLists: JSON.parse(JSON.stringify(cartLists)),
          items: JSON.parse(JSON.stringify(items)),
        },
      }
    } catch (error) {
      console.log(error)
      return {
        props: {
          error: JSON.parse(JSON.stringify(error)),
          cartLists: [],
          items: [],
        },
      }
    }
  },
})
