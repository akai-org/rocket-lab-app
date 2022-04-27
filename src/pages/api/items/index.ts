import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { ItemModel } from '../../../mongo/models/item'
import { QUERY_LIMIT } from '../../../utils/constants'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'GET') {
    const params = req.query

    try {
      const models = await ItemModel.find()
        .skip(+params.skip)
        .limit(+(process.env.API_MONGODB_LIMIT ?? QUERY_LIMIT))
      res.status(200).send(models)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withReader')(handler))
