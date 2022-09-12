import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { deleteSchemaItem } from 'services'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body
    const schemaId = body.schemaId
    const itemId = body.itemId
    try {
      const updatedSchema = await deleteSchemaItem(schemaId, itemId)
      res.status(200).send(updatedSchema)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
