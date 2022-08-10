import { withApiAuthRequired } from '@auth0/nextjs-auth0'
import { NextApiHandler } from 'next'
import { Item } from '../../../mongo/models/item'
import {
  createHistoryLog,
  validateSession,
} from '../../../services/historyService'
import * as itemsService from '../../../services/itemsService'
import { withMiddleware } from '../../../utils/middlewares'

const handler: NextApiHandler = async (req, res) => {
  if (req.method === 'PUT') {
    const body = req.body
    try {
      const session = validateSession(req, res)
      const oldItem = await itemsService.fetchItem(body.id)
      console.log({ oldItem })
      const updatedItem = await itemsService.updateItem(body.id, body.item)
      if (!updatedItem) throw new Error('No item updated')
      if (!oldItem) throw new Error('No item found in DB')
      if (oldItem.quantity > body.item.quantity) {
        await createHistoryLog(session.user.email, 'distributed', {
          name: updatedItem.name,
          type: 'item',
          description: updatedItem.description,
        })
      }

      const itemHasBeenModified = checkIfItemHasBeenModified(
        oldItem,
        updatedItem
      )
      if (itemHasBeenModified) {
        await createHistoryLog(session.user.email, 'modified', {
          name: updatedItem.name,
          type: 'item',
          description: updatedItem.description,
        })
      }

      res.status(200).send(updatedItem)
    } catch (error) {
      console.log(error)
      res.status(400).send(error)
    }
  }
}

function checkIfItemHasBeenModified(oldItem: Item, updatedItem: Item) {
  const changedQuantity = updatedItem.quantity > oldItem.quantity
  const changedName = updatedItem.name !== oldItem.name
  const changedDescription = updatedItem.description !== oldItem.description
  const changedImageUrl = updatedItem.imageUrl !== oldItem.imageUrl
  const changedCategories = !arrayEquals(
    oldItem.categories,
    updatedItem.categories
  )
  console.log(oldItem.categories)
  if (
    changedQuantity ||
    changedName ||
    changedDescription ||
    changedImageUrl ||
    changedCategories
  )
    return true

  return false
}

function arrayEquals(a: string[], b: string[]) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val.toString() === b[index].toString())
  )
}

export default withApiAuthRequired(withMiddleware('withEditor')(handler))
