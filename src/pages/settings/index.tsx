import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Settings } from 'ui/modules'

const Home: NextPage = () => <Settings />

export default Home

export const getServerSideProps = withPageAuthRequired()
