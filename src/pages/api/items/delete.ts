import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import {
  createHistoryLog,
  validateSession,
} from '../../../services/historyService'
import * as itemsService from '../../../services/itemsService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'DELETE') {
    const body = req.body
    try {
      const session = validateSession(req, res)
      const deletedItem = await itemsService.deleteItem(body.id)
      if (!deletedItem) throw new Error('No deleted item found')
      await createHistoryLog(session.user.email, 'removed', {
        name: deletedItem.name,
        type: 'item',
        description: deletedItem.description,
      })
      res.status(200).send(deletedItem)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
