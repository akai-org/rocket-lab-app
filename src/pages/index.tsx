import type { NextPage } from 'next'
import { Heading, Text } from '@chakra-ui/react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'
import Link from 'next/link'

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser()

  if (isLoading) {
    return <Text>Loading spinner ....</Text>
  }

  if (error) {
    return <Text>There was an error</Text>
  }

  if (!user) {
    return (
      <>
        <Text>Your are at MainPage but not authenticated. Please login.</Text>
        <Link href="/api/auth/login">Login</Link>
      </>
    )
  }

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
