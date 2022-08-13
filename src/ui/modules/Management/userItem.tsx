import { ListItem, Select } from '@chakra-ui/react'
import { User } from 'mongo'
import { adminRoles } from 'utils'

const options: adminRoles[] = ['reader', 'editor', 'admin']

interface Props {
  user: User
  changeHandler: (id: string, value: adminRoles) => void
}

export const UserItem: React.FC<Props> = ({ user, changeHandler }) => {
  const displayOptions = options.map((option) => (
    <option key={option}>{option}</option>
  ))
  // TODO: dodawanie maili i nazwy przy rejestracji do mongo
  return (
    <ListItem>
      <h1>{user.email}</h1>
      <Select
        onChange={(e) =>
          changeHandler(user.id, e.currentTarget.value as adminRoles)
        }
        value={user.role}
      >
        {displayOptions}
      </Select>
    </ListItem>
  )
}
