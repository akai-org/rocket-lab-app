import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { MainViewProps } from '../utils/types/frontendGeneral'
import MobileStorage from '../components/MobileStorage/MobileStorage'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopStorage from '../components/DesktopStorage/DesktopStorage'
import { connectDB } from '../mongo/db'
import { Text } from '@chakra-ui/react'
import * as itemsService from '../services/itemsService'
import { Credentials } from '../utils/credentials'

interface Props extends MainViewProps {
  error?: Error
}

const Home: NextPage<Props> = ({ items, error, itemsCount }) => {
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
      const items = await itemsService.fetchItems(
        // that strange calculations are to get specified amount of items per page, #FIXME: 
        query.page ? (parseInt(query.page as string, 10) - 1) * 4 : 0
      )

      
      const itemsCount = await itemsService.fetchItemsCount()

      return {
        props: {
          items: JSON.parse(JSON.stringify(items)),
          itemsCount: JSON.parse(JSON.stringify(itemsCount))
        },
      }
    } catch (e) {
      console.log(e)
      return {
        props: {
          error: JSON.parse(JSON.stringify(e)),
          itemsCount: undefined
        },
      }
    }
  },
})
