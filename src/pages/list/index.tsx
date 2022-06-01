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

// TO DO fetch data from DB
interface Props {
  cartLists: PopulatedCartList[]
  error?: {}
}

export interface CartListsProps extends Pick<Props, 'cartLists'> {}

const Home: NextPage<Props> = ({ cartLists }) => {
  const storageCartData = useSelector(storageCartInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    if (storageCartData.cartLists.length !== cartLists.length) {
      dispatch(setExistingCartLists(cartLists))
    }
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
    await connectDB()
    await Credentials.withReader(req, res)

    try {
      const cartLists = await fetchCartLists(true)
      return { props: { cartLists: JSON.parse(JSON.stringify(cartLists)) } }
    } catch (error) {
      console.log(error)
      return {
        props: { error: JSON.parse(JSON.stringify(error)), cartLists: [] },
      }
    }
  },
})
