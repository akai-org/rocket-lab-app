import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import {
  createHistoryLog,
  validateSession,
} from '../../../services/historyService'
import * as itemsService from '../../../services/itemsService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'PUT') {
    const body = req.body
    try {
      const session = validateSession(req, res)
      const updatedItem = await itemsService.updateItem(body.id, body.item)
      if (!updatedItem) throw new Error('No item updated')
      await createHistoryLog(session.user.email, 'modified', {
        name: updatedItem.name,
        type: 'item',
        description: updatedItem.description,
      })
      res.status(200).send(updatedItem)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
