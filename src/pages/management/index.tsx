import {
  withPageAuthRequired,
  WithPageAuthRequiredOptions,
} from '@auth0/nextjs-auth0'
import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'
import { connectDB } from '../../../mongo/db'
import { User, userModel } from '../../../mongo/models/user'
import { UsersList } from '../../components/Management/usersList'

export interface Error {
  message: string
}

interface Props {
  users?: User[]
  error?: Error
}

const ManagementHome: NextPage<Props> = ({ users: propsUsers, error }) => {
  const [users, setUsers] = useState(propsUsers)

  const updateUsers = (users: User[]) => {
    setUsers(users)
  }

  return !error && users ? (
    <Box>
      <UsersList updateUsers={updateUsers} users={users} />
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
