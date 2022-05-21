import { createSlice, current } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../mongo/models/item'

type data = {
  list: Item[]
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
      if (!state.data.list.some((item) => item.id === action.payload.id)) {
        state.data.list.push(action.payload)
      }
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      state.data.list = state.data.list.filter(
        (item) => item.id !== action.payload.id
      )
    },
    clearCart: (state) => {
      state.data.list = []
    },
  },
})

export const storageCartReducer = storageCartSlice.reducer

export const { addToCart, removeFromCart, clearCart } = storageCartSlice.actions
