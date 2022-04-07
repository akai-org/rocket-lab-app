import type { NextPage } from 'next'
import { Heading, Text, Container } from '@chakra-ui/react'
import Link from 'next/link'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'

interface Props {
  exampleData: {
    id: number
    str: string
  }[]
}

const LoggedIn: NextPage<Props> = ({ exampleData }) => {
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

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
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
  },
})
