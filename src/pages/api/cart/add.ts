import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next/types'
import { createNewCartList } from '../../../services/cartService'
import {
  createHistoryLog,
  validateSession,
} from '../../../services/historyService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  const method = req.method

  if (method === 'POST') {
    try {
      const session = validateSession(req, res)
      const newCartList = await createNewCartList(req.body.name, req.body.items)
      await createHistoryLog(session.user.email, 'added', {
        name: newCartList.name,
        type: 'cartList',
      })
      res.status(200).send(newCartList)
    } catch (error) {
      console.log(error)
      res.status(500).send({ error })
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
