import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { User } from '../../../mongo/models/user'
import * as userService from '../../../services/userService'
import { withMiddleware } from '../../../utils/middlewares'

// TODO: Refactor needed

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'PATCH') {
    try {
      await userService.updateUsersRoles(req.body as User[])
      res.status(200).send({ message: 'Users Updated successfully' })
    } catch (error) {
      console.log(error)
      res.status(500).send({ error: error as string })
    }
  } else if (req.method === 'GET') {
    try {
      const users = await userService.fetchUsers(+req.query)
      res.status(200).send(users)
    } catch (error) {
      console.log('error found ' + error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withAdmin')(handler))
