import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import DesktopList from '../../components/List/DesktopList/DesktopList'
import MobileList from '../../components/List/MobileList/MobileList'
import { useMediaQuery } from '@chakra-ui/react'

// TO DO fetch data from DB

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const List = isDesktop ? <DesktopList /> : <MobileList />
  return List
}

export default Home

export const getServerSideProps = withPageAuthRequired()
