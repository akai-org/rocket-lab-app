import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import MobileStorage from '../components/MobileStorage/MobileStorage'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopStorage from '../components/DesktopStorage/DesktopStorage'

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  return <>{isDesktop ? <DesktopStorage /> : <MobileStorage />}</>
}

export default Home

export const getServerSideProps = withPageAuthRequired()
