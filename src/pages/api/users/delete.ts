import { NextApiHandler } from 'next'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { deleteUser } from 'services'
import { withMiddleware } from 'utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'DELETE') {
    const body = req.body
    try {
      const deletedUser = await deleteUser(body.userId)
      res.status(200).send(deletedUser)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withAdmin')(handler))
