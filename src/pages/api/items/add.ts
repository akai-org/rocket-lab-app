import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { createHistoryLog, validateSession } from '../../../services/historyService'
import * as itemsService from '../../../services/itemsService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'POST') {
    const body = req.body
    try {
      const session = validateSession(req, res)
      const addedItem = await itemsService.addItem(body)
      await createHistoryLog(session.user.email, 'added', {
        name: addedItem.name,
        type: 'item',
        description: addedItem.description,
      })
      res.status(200).send(addedItem)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
