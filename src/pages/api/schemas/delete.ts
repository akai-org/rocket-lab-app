import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import {
  createHistoryLog,
  validateSession,
} from '../../../services/historyService'
import { deleteSchema } from '../../../services/schemasService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'DELETE') {
    const id = req.body.id
    try {
      const session = validateSession(req, res)
      const deletedItem = await deleteSchema(id)
      if (!deletedItem) throw new Error('')
      await createHistoryLog(session.user.email, 'removed', {
        name: deletedItem.name,
        type: 'schema',
      })
      res.status(200).send(deletedItem)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
