import {
  getSession,
  withPageAuthRequired,
  WithPageAuthRequiredOptions,
} from '@auth0/nextjs-auth0'
import { Box } from '@chakra-ui/react'
import { NextPage } from 'next'
import { useState } from 'react'
import { UsersList } from '../../components/Management/usersList'
import { connectDB } from '../../mongo/db'
import { User, userModel } from '../../mongo/models/user'

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

const neededRole = 'admin'

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    try {
      await connectDB()

      const session = getSession(req, res)

      if (!session) throw new Error('Unauthorized access')

      const user = await userModel.findById(
        (session.user.sub as string).split('|')[1]
      )

      if (user?.role !== neededRole) throw new Error('Unauthorized access')

      const users = await userModel.find({}).limit(15)

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
