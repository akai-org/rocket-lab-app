import { NextApiHandler } from 'next'
import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { withMiddleware } from '../../../utils'
import { updateUsersRoles } from '../../../services'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'PUT') {
    const body = req.body
    try {
      console.log('updating users roles')
      const updatedUsers = await updateUsersRoles(body.users)

      console.log(updatedUsers)

      res.status(200).send(updatedUsers)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withAdmin')(handler))
