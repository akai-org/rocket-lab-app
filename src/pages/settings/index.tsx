import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopSettings from '../../components/Settings/DesktopSettings/DesktopSettings'

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const Settings = isDesktop ? <DesktopSettings /> : <></>
  return Settings
}

export default Home

export const getServerSideProps = withPageAuthRequired()
