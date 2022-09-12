import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { addSchemaItem } from 'services'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body
    const schemaId = body.schemaId
    const schemaItem = body.schemaItem
    try {
      const newItem = await addSchemaItem(schemaId, schemaItem)
      console.log(newItem)
      res.status(200).send('addedItem')
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
