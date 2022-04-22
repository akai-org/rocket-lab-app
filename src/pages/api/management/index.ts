import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { connectDB } from '../../../mongo/db'
import { userModel as UserModel, User } from '../../../mongo/models/user'

const neededRole = 'admin'

// TODO: Refactor needed

export default withApiAuthRequired(async function items(req, res) {
  if (req.method === 'PATCH') {
    try {
      const session = getSession(req, res)
      if (!session) {
        throw new Error('Unauthorized access')
      }

      // Getting user info
      const validId = (session.user.sub as string).split('|')[1]
      const user = await UserModel.findById<User>(validId)
      if (user?.role !== neededRole) throw new Error('Unauthorized access')

      // updating users
      const users = JSON.parse(req.body) as User[]
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
      res.status(200).send({ message: 'Users Updated successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ error: (error as string).toString() })
    }
  } else if (req.method === 'GET') {
    const session = getSession(req, res)
    if (!session) {
      throw new Error('Unauthorized access')
    }

    if (!process.env.API_MONGODB_LIMIT)
      throw new Error('No API_MONGODB_LIMIT env specified')

    // Getting user info
    const validId = (session.user.sub as string).split('|')[1]
    const user = await UserModel.findById<User>(validId)
    if (user?.role !== neededRole) throw new Error('Unauthorized access')

    const params = req.query

    try {
      await connectDB()

      const users = await UserModel.find()
        .skip(+params.skip)
        .limit(+process.env.API_MONGODB_LIMIT)

      res.status(200).send(users)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
})
