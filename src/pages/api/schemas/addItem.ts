import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { addSchemaItem, createHistoryLog, validateSession } from 'services'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body
    const schemaId = body.schemaId
    const schemaItem = body.schemaItem
    try {
      
      const session = validateSession(req, res)
      const updatedSchema = await addSchemaItem(schemaId, schemaItem)
      if (!updatedSchema) throw new Error('No updated Cart List')
      await createHistoryLog(session.user.email, 'modified', {
        name: updatedSchema.name,
        type: 'schema',
      })
      res.status(200).send(updatedSchema)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
