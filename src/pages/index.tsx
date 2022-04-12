import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import ItemsList from '../components/Storage/ItemsList/ItemsList'

const Home: NextPage = () => {
  return <ItemsList />
}

export default Home

export const getServerSideProps = withPageAuthRequired()
