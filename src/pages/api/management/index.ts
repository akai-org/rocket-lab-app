import { getSession, withApiAuthRequired } from '@auth0/nextjs-auth0'
import { User, userModel } from '../../../../mongo/models/user'

const neededRole = 'admin'

export default withApiAuthRequired(async function items(req, res) {
  if (req.method === 'PATCH') {
    try {
      const session = getSession(req, res)
      if (!session) {
        throw new Error('Unauthorized access')
      }

      // Getting user info
      const validId = (session.user.sub as string).split('|')[1]
      const user = await userModel.findById<User>(validId)
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
        await userModel.updateMany({ _id: { $in: usersIds } }, { role })
      }
      res.status(200).send({ message: 'Users Updated successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ error: (error as string).toString() })
    }
  }
})
