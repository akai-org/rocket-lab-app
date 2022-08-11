import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next/types'
import { removeCartListItem } from '../../../services/cartService'
import {
  createHistoryLog,
  validateSession,
} from '../../../services/historyService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  const method = req.method

  const body = req.body

  console.log(body)

  if (method === 'DELETE') {
    try {
      const session = validateSession(req, res)
      const updatedCartList = await removeCartListItem(body.listId, body.itemId)
      if (!updatedCartList) throw new Error('No deleted Cart List')
      await createHistoryLog(session.user.email, 'removed', {
        name: updatedCartList.name,
        type: 'cartList',
      })
      res.status(200).send(updatedCartList)
    } catch (error) {
      console.log(error)
      res.status(500).send({ error })
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
