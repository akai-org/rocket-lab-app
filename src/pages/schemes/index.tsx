import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopSchemes from '../../components/Schemes/DesktopSchemes/DesktopSchemes'
import MobileSchemes from '../../components/Schemes/MobileSchemes/MobileSchemes'

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const History = isDesktop ? <DesktopSchemes /> : <MobileSchemes />
  return History
}

export default Home

export const getServerSideProps = withPageAuthRequired()
