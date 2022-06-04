import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import * as categoryService from '../../../services/categoryService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'DELETE') {
    try {
      const categoriesIds = req.body.categoriesIds
      const deletedCategories = await categoryService.deleteCategories(
        categoriesIds
      )
      res.status(200).send(deletedCategories)
    } catch (error) {
      console.log(error)
      res.status(500).send(error)
    }
  }
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
