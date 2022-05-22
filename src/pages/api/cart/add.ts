import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next/types'
import { createNewCartList } from '../../../services/cartService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  const method = req.method

  const body = req.body

  console.log(body)

  if (method === 'POST') {
    createNewCartList(req.body.name, req.body.items)
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
