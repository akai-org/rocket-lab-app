import type { NextPage } from 'next'
import { Heading } from '@chakra-ui/react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import Link from 'next/link'

const Home: NextPage = () => {

  return (
    <>
      <Heading>Main Page</Heading>
      <Link href="/loggedIn">Loggedin Page</Link>
      <br />
      <Link href="/api/auth/logout">Logout</Link>
      <Link href="/management">Management</Link>
    </>
  )
}

export default Home

export const getServerSideProps = withPageAuthRequired()
