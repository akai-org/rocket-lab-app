import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { updateSchema } from '../../../services/schemasService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const { schemaId, schemaName, schemaDescription, schemaItems } = req.body
    try {
      const updatedSchema = await updateSchema(
        schemaId,
        schemaItems,
        schemaName,
        schemaDescription
      )
      console.log(updatedSchema)
      res.status(200).send(updatedSchema)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
