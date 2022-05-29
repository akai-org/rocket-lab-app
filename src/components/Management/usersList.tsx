import { Button, UnorderedList } from '@chakra-ui/react'
import { FormEvent, useState } from 'react'
import { User, Role } from '../../mongo/models/user'
import { API_URL } from '../../utils/constants'
import { fetcher } from '../../utils/requests'
import { UserItem } from './userItem'

interface Props {
  users: User[]
  updateUsers: (users: User[]) => void
}

export const UsersList: React.FC<Props> = ({ users, updateUsers }) => {
  const [formUsers, setFormUsers] = useState(users)

  const handleSelectorChange = (id: string, role: Role) => {
    const userIndex = formUsers.findIndex((user) => user.id === id)
    const copiedUsers = [...formUsers]
    const userToUpdate = { ...copiedUsers.splice(userIndex, 1)[0], role }
    copiedUsers.splice(userIndex, 0, userToUpdate)
    setFormUsers([...copiedUsers])
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      await fetcher(API_URL+'/api/management', {
        method: 'PATCH',
        body: JSON.stringify(updatedUsers),
      })
      updateUsers(formUsers)
    } catch (error) {
      console.log(error)
    }
  }

  const updatedUsers: User[] = []

  for (const user of formUsers) {
    const originalUser = users.find(({ _id }) => _id === user._id)
    if (originalUser && originalUser.role !== user.role) {
      updatedUsers.push(user)
    }
  }

  const displayUsers = formUsers.map((user) => (
    <UserItem changeHandler={handleSelectorChange} user={user} key={user.id} />
  ))

  return (
    <form onSubmit={handleSubmit}>
      <UnorderedList>{displayUsers}</UnorderedList>
      <Button disabled={updatedUsers.length === 0 ? true : false} type="submit">
        Save changes
      </Button>
    </form>
  )
}
