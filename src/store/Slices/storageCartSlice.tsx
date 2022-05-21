import { createSlice, current } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../mongo/models/item'
export interface CartItem {
  item: Item
  quantity: number
}

type data = {
  list: CartItem[]
}

type initialValues = {
  data: data
}

const initialState: initialValues = {
  data: {
    list: [],
  },
}

export const storageCartSlice = createSlice({
  name: 'storageCartSlice',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<Item>) => {
      if (
        !state.data.list.some(
          (cartItem) => cartItem.item.id === action.payload.id
        )
      ) {
        state.data.list.push({ quantity: 1, item: action.payload })
      }
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      state.data.list = state.data.list.filter(
        (cart) => cart.item.id !== action.payload.id
      )
    },
    clearCart: (state) => {
      state.data.list = []
    },
  },
})

export const storageCartReducer = storageCartSlice.reducer

export const { addToCart, removeFromCart, clearCart } = storageCartSlice.actions
