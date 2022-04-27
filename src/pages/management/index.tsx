import {
  withPageAuthRequired,
  WithPageAuthRequiredOptions,
} from '@auth0/nextjs-auth0'
import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'
import { UsersList } from '../../components/Management/usersList'
import { connectDB } from '../../mongo/db'
import { User } from '../../mongo/models/user'
import { Credentials } from '../../utils/credentials'
import * as userService from '../../services/userService'

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
  async getServerSideProps({ req, res }) {
    try {
      await connectDB()

      await Credentials.withAdmin(req, res)

      const users = await userService.fetchUsers(0)

      return {
        props: {
          users: JSON.parse(JSON.stringify(users)),
        },
      }
    } catch (error) {
      console.log(error)
      const errorMessage = error as Error
      // TODO: To some redirecting with popup why redirected
      return {
        props: { error: JSON.parse(JSON.stringify(errorMessage)) },
      }
    }
  },
} as WithPageAuthRequiredOptions)
