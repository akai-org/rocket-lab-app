import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'

// TO DO fetch data from DB

const Home: NextPage = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const History = isDesktop ? 'DekstopHistory' : 'MobileHistory'
  return <>History</>
}

export default Home

export const getServerSideProps = withPageAuthRequired()
