import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next/types'
import { CartListModel } from '../../../mongo/models/cart'
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
      const deletedCartList = await CartListModel.findByIdAndDelete(
        req.body.id,
        {
          new: true,
        }
      )
      if (!deletedCartList) throw new Error('No deleted Cart List')
      await createHistoryLog(session.user.email, 'removed', {
        name: deletedCartList.name,
        type: 'cartList',
      })
      res.status(200).send(deletedCartList)
    } catch (error) {
      console.log(error)
      res.status(500).send({ error })
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
