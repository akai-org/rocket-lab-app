import { User, userModel as UserModel } from '../mongo/models/user'
import { ITEMS_QUERY_LIMIT } from '../utils/constants'

export async function updateUsersRoles(users: User[]) {
  // updating users
  const roles = new Set()
  for (const user of users) {
    roles.add(user.role)
  }
  const arrayRoles = Array.from(roles)
  for (const role of arrayRoles) {
    const roleUsers = users.filter((user) => user.role === role)
    const usersIds = roleUsers.map(({ _id }) => _id)
    await UserModel.updateMany({ _id: { $in: usersIds } }, { role })
  }
}

export async function fetchUsers(skip: number): Promise<User[]> {
  const users = await UserModel.find()
    .skip(skip)
    .limit(ITEMS_QUERY_LIMIT)

  return users
}
