import { useSelector, useDispatch } from 'react-redux'
import { PopulatedCartList, CartItem } from 'mongo'
import { updateExistingCartLists, clearCart, storageCartInfo } from 'store'
import { API_URL } from '../constants'
import { fetcher } from '../requests'

export function useAddNewList(onCloseDetails: () => void) {
  const storageCartData = useSelector(storageCartInfo)
  const dispatch = useDispatch()

  const addNewList = async (name: string, listToMerge?: PopulatedCartList) => {
    try {
      if (!listToMerge) {
        await fetcher(API_URL + '/api/cart/add', {
          method: 'POST',
          body: { name, items: storageCartData.newCartList },
        })
      } else {
        const toAddList = [...storageCartData.newCartList]
        const newList: CartItem[] = []
        for (const item of listToMerge.items) {
          const foundCopyindex = toAddList.findIndex(
            (cartItem) => cartItem.item.id === item.item?.id
          )
          const changedItem = { ...item }
          if (toAddList[foundCopyindex]) {
            changedItem.quantity += toAddList[foundCopyindex].quantity

            toAddList.splice(foundCopyindex, 1)
          }
          newList.push(changedItem)
        }
        const updatedList = await fetcher(API_URL + '/api/cart/update', {
          method: 'PUT',
          body: { id: listToMerge.id, items: [...toAddList, ...newList] },
        })
        console.log(updatedList)
        dispatch(updateExistingCartLists(updatedList))
      }
      dispatch(clearCart())
      onCloseDetails()
    } catch (error) {
      console.log(error)
    }
  }

  return addNewList
}
