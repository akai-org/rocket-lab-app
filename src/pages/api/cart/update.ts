import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next/types'
import { updateCartList } from '../../../services/cartService'
import {
  createHistoryLog,
  validateSession,
} from '../../../services/historyService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  const method = req.method

  const body = req.body

  if (method === 'PUT') {
    try {
      const session = validateSession(req, res)
      const updatedCartList = await updateCartList(
        body.id,
        body.items,
        body.name
      )
      if (!updatedCartList) throw new Error('No deleted Cart List')
      await createHistoryLog(session.user.email, 'modified', {
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
