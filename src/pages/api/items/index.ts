import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { connectDB } from '../../../mongo/db'
import { ItemModel } from '../../../mongo/models/item'

export default withApiAuthRequired(async function items(req, res) {
  if (req.method === 'GET') {
    if (!process.env.API_MONGODB_LIMIT) {
      throw new Error('No API_MONGODB_LIMIT env specified')
    }

    const params = req.query

    try {
      await connectDB()

    
      const models = await ItemModel.find()
        .skip(+params.skip)
        .limit(+!process.env.API_MONGODB_LIMIT)
      res.status(200).send(models)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
})
