import { ListItem, Select } from '@chakra-ui/react'
import { Role, User } from '../../mongo/models/user'

const options: Role[] = ['reader', 'editor', 'admin']

interface Props {
  user: User
  changeHandler: (id: string, value: Role) => void
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
        onChange={(e) => changeHandler(user._id, e.currentTarget.value as Role)}
        value={user.role}
      >
        {displayOptions}
      </Select>
    </ListItem>
  )
}
