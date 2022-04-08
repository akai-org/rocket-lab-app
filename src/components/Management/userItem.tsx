import { ListItem, Select } from '@chakra-ui/react'
import { Role, User } from '../../../mongo/models/user'

const options: Role[] = ['reader', 'editor', 'admin']

interface Props {
  user: User
  changeHandler: (id: string, value: Role) => void
}

export const UserItem: React.FC<Props> = ({ user, changeHandler }) => {
  const displayOptions = options.map((option) => (
    <option key={option}>{option}</option>
  ))

  return (
    <ListItem>
      <h1>{user.role}</h1>
      <Select
        onChange={(e) => changeHandler(user._id, e.currentTarget.value as Role)}
        name={user._id}
        value={user.role}
      >
        {displayOptions}
      </Select>
    </ListItem>
  )
}
