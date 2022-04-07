import type { NextPage } from 'next'
import { Heading, Text, Container } from '@chakra-ui/react'
import { useUser } from '@auth0/nextjs-auth0'
import Link from 'next/link'

interface Props {
  exampleData: {
    id: number
    str: string
  }[]
}

const LoggedIn: NextPage<Props> = ({ exampleData }) => {
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
        <Text>
          Your are at Loggedin Page but not authenticated. Please login.
        </Text>
        <Link href="/api/auth/login">Login</Link>
      </>
    )
  }

  return (
    <Container m={5}>
      <Heading>Logged In Page</Heading>
      <Text>Secret Data</Text>
      {exampleData.map((element) => (
        <>
          <Text>
            Id: {element.id}, Str: {element.str}
          </Text>
          <Link href="/api/auth/logout">Logout</Link>
        </>
      ))}
    </Container>
  )
}

export default LoggedIn

export const getServerSideProps = () => {
  return {
    props: {
      exampleData: [
        {
          id: 1,
          str: '111',
        },
        {
          id: 2,
          str: '222',
        },
        {
          id: 1,
          str: '333',
        },
      ],
    },
  }
}
