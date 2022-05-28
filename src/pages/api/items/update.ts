import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import * as itemsService from '../../../services/itemsService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'PUT') {
    const body = req.body
    console.log(body)
    try {
      const items = await itemsService.updateItem(body.id, body.item)
      res.status(200).send(items)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withReader')(handler))
