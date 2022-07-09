import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { deleteSchema } from '../../../services/schemasService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'DELETE') {
    const id = req.body.id
    try {
      const deletedItem = await deleteSchema(id)
      res.status(200).send(deletedItem)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
