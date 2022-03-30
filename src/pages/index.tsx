import type { NextPage } from 'next'
import { Heading, Text } from '@chakra-ui/react'
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0'

const Home: NextPage = () => {
  const { user, error, isLoading } = useUser()

  console.log(user)

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
        <a href="/api/auth/login">Login</a>
      </>
    )
  }
  return (
    <>
      <Heading>Main Page</Heading>
      <a href="/loggedin">Loggedin Page</a>
      <br />
      <a href="/api/auth/logout">Logout</a>
    </>
  )
}

export default Home

// export const getServerSideProps = withPageAuthRequired()
