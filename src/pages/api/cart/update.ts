import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next/types'
import {
  createNewCartList,
  updateCartList,
} from '../../../services/cartService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  const method = req.method

  const body = req.body

  if (method === 'PUT') {
    try {
      const newCartList = await updateCartList(body.id, body.items)
      console.log(newCartList)
      res.status(200).send(newCartList)
    } catch (error) {
      console.log(error)
      res.status(500).send({ error })
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
