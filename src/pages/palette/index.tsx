import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Palette } from 'ui/modules'

const Home: NextPage = () => <Palette />

export default Home

export const getServerSideProps = withPageAuthRequired()
