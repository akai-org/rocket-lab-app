import { useDispatch } from 'react-redux'
import { removeExisitngCartList } from 'store'
import { API_URL } from '../constants'
import { fetcher } from '../requests'

export function useDeleteCartList() {
  const dispatch = useDispatch()
  const deleteCartList = async (id: string) => {
    try {
      const deletedCartList = await fetcher(API_URL + '/api/cart/delete', {
        method: 'DELETE',
        body: { id },
      })
      dispatch(removeExisitngCartList(deletedCartList))
    } catch (error) {
      console.log(error)
    }
  }
  return deleteCartList
}
