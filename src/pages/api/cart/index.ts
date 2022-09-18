import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next/types'
import { fetchCartLists } from 'services'
import { withMiddleware } from 'utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    try {
      // TODO: put it into a proper service
      const cartLists = await fetchCartLists(true)
      res.status(200).send(cartLists)
    } catch (error) {
      console.log(error)
      res.status(500).send({ error })
    }
  }
}

export default withApiAuthRequired(withMiddleware('withReader')(handler))
