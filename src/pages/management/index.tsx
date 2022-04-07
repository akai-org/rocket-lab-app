import {
  getSession,
  withPageAuthRequired,
  WithPageAuthRequiredOptions,
} from '@auth0/nextjs-auth0'
import { Box, ListItem, UnorderedList } from '@chakra-ui/react'
import { NextPage, GetServerSideProps } from 'next'
import { connectDB } from '../../../mongo/db'
import { User, userModel } from '../../../mongo/models/user'

export interface Error {
  message: string
}

interface Props {
  users?: User[]
  error?: Error
}

const ManagementHome: NextPage<Props> = ({ users, error }) => {
  const usersList = users?.map((user) => (
    <ListItem key={user._id}>{user.role}</ListItem>
  ))

  return !error ? (
    <Box>
      <UnorderedList>{usersList}</UnorderedList>
    </Box>
  ) : (
    <div>error</div>
  )
}

export default ManagementHome

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps() {
    try {
      await connectDB()

      const users = await userModel.find({}).limit(15)

      return {
        props: {
          users: JSON.parse(JSON.stringify(users)),
        },
      }
    } catch (error) {
      console.log(error)
      const errorMessage = error as Error
      return {
        props: { error: { message: errorMessage } },
      }
    }
  },
} as WithPageAuthRequiredOptions)
