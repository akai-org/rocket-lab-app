import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { addSchema } from '../../../services/schemasService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body
    const name = body.name
    const description = body.description
    const schemaItems = body.items
    try {
      const addedItem = await addSchema({ name, description, schemaItems })
      res.status(200).send(addedItem)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
