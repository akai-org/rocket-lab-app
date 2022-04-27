import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { userModel as UserModel, User } from '../../../mongo/models/user'
import { withMiddleware } from '../../../utils/middlewares'

// TODO: Refactor needed

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
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

    const params = req.query

    try {

      const users = await UserModel.find()
        .skip(+params.skip)
        .limit(+(process.env.API_MONGODB_LIMIT ?? 15))

      res.status(200).send(users)
    } catch (error) {
      console.log('error found ' + error)
      res.status(400).send(error)
    }
  }}

export default withApiAuthRequired(withMiddleware('withAdmin')(handler))
