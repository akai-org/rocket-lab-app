import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { User, userModel } from '../../../../mongo/models/user'

export default withApiAuthRequired(async function items(req, res) {
  if (req.method === 'PATCH') {
    const users = JSON.parse(req.body) as User[]
    const roles = new Set()
    for (const user of users) {
      roles.add(user.role)
    }
    const arrayRoles = Array.from(roles)
    try {
      for (const role of arrayRoles) {
        const roleUsers = users.filter((user) => user.role === role)
        const usersIds = roleUsers.map(({ _id }) => _id)
        await userModel.updateMany(
          { _id: { $in: usersIds } },
          { role }
        )
      }
      res.status(200).send({ message: 'Users Updated successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ error })
    }
  }
})
