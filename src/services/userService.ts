import { User, UserModel } from 'mongo/models/user'
import { ITEMS_QUERY_LIMIT } from 'utils/constants'
import { ManagementClient } from 'auth0'

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
    await UserModel.updateMany(
      { _id: { $in: usersIds } },
      { role },
      { new: true }
    )
  }
  return UserModel.find()
}

export async function fetchUsers(skip: number): Promise<User[]> {
  return UserModel.find().skip(skip).limit(ITEMS_QUERY_LIMIT)
}

export const deleteUser = async (userId: string) => {
  if (!process.env.AUTH0_ISSUER_BASE_URI) {
    throw new Error('AUTH0_ISSUER_BASE_URI is not set')
  }

  if (!process.env.AUTH0_MANAGEMENT_CLIENT_SECRET) {
    throw new Error('AUTH0_MANAGEMENT_CLIENT_SECRET is not set')
  }

  if (!process.env.AUTH0_MANAGEMENT_CLIENT_ID) {
    throw new Error('AUTH0_MANAGEMENT_CLIENT_ID is not set')
  }

  const management = new ManagementClient({
    clientId: process.env.AUTH0_MANAGEMENT_CLIENT_ID,
    clientSecret: process.env.AUTH0_MANAGEMENT_CLIENT_SECRET,
    domain: process.env.AUTH0_ISSUER_BASE_URI,
  })

  await management.deleteUser({ id: `auth0|${userId}` })

  return UserModel.findOneAndDelete({ _id: userId }, { new: true })
}
