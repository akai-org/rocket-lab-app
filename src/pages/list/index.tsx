import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { DesktopList, MobileList } from 'ui/modules'
import { useMediaQuery } from '@chakra-ui/react'
import { PopulatedCartList } from 'mongo'
import { connectDB, PopulatedItem } from 'mongo'
import { Credentials } from 'utils'
import { fetchCartLists, fetchAllItems } from 'services'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setExistingCartLists, setItems } from 'store'

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
  getServerSideProps: async ({ req, res }): Promise<{ props: Props }> => {
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
