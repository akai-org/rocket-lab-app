import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { Settings } from 'ui/modules'
import { connectDB, User, UserModel } from 'mongo'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setUsers } from '../../store/Slices/usersSlice'

interface Props {
  users: User[]
}

const Home: NextPage<Props> = ({ users }) => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setUsers(users))
  }, [users, dispatch, setUsers])

  return <Settings />
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (): Promise<{ props: Props }> => {
    try {
      await connectDB()

      const users = await UserModel.find()

      return { props: { users: JSON.parse(JSON.stringify(users)) } }
    } catch (e) {
      console.log(e)
      return { props: { users: [] } }
    }
  },
})
