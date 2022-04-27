import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { ItemProps } from '../utils/types/frontendGeneral'
import MobileStorage from '../components/MobileStorage/MobileStorage'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopStorage from '../components/DesktopStorage/DesktopStorage'
import { connectDB } from '../mongo/db'
import { Text } from '@chakra-ui/react'
import * as itemsService from '../services/itemsService'
import { Credentials } from '../utils/credentials'

interface Props {
  items?: ItemProps[]
  error?: Error
}

const Home: NextPage<Props> = ({ items, error }) => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const Storage = isDesktop ? (
    <DesktopStorage items={items ?? []} />
  ) : (
    <MobileStorage items={items ?? []} />
  )
  console.log(items)

  return !error ? Storage : <Text>{error.message}</Text>
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }): Promise<{ props: Props }> => {
    try {
      await connectDB()
      await Credentials.withReader(req, res)
      const items = await itemsService.fetchItems(0)

      return {
        props: {
          items: JSON.parse(JSON.stringify(items)),
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
