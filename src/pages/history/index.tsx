import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'

import DesktopHistory from '../../components/History/DesktopHistory/DesktopHistory'
import MobileHistory from '../../components/History/MobileHistory/MobileHistory'

// TO DO fetch data from DB

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const History = isDesktop ? <DesktopHistory /> : <MobileHistory />
  return History
}

export default Home

export const getServerSideProps = withPageAuthRequired()
