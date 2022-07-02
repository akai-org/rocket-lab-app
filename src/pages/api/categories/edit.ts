import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import * as categoryService from '../../../services/categoryService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'PATCH') {
    try {
      const id = req.body.id
      const name = req.body.name
      const updatedCategory = await categoryService.updateCategory(id, name)
      res.status(200).send(updatedCategory)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
