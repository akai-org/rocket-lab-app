import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopSchemes from '../../components/Schemes/DesktopSchemes/DesktopSchemes'

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const History = <DesktopSchemes />
  return History
}

export default Home

export const getServerSideProps = withPageAuthRequired()
