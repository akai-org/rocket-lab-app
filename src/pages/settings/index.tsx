import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Settings from '../../components/Settings/Settings'

const Home: NextPage = () => <Settings />

export default Home

export const getServerSideProps = withPageAuthRequired()
