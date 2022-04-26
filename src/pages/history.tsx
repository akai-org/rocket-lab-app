import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { ItemProps } from '../utils/types/ItemProps'
import MobileStorage from '../components/MobileStorage/MobileStorage'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopStorage from '../components/DesktopStorage/DesktopStorage'
import { connectDB } from '../mongo/db'
import { ItemModel } from '../mongo/models/item'
import { Text } from '@chakra-ui/react'

const History: NextPage<Props> = ({ items, error }) => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const Storage = isDesktop ? (
    <DesktopStorage items={items ?? []} />
  ) : (
    <MobileStorage items={items ?? []} />
  )
  console.log(items)

  return !error ? Storage : <Text>{error.message}</Text>
}

export default History
