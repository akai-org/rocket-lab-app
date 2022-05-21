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
    changeItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const oldCartItemIndex = state.data.list.findIndex(
        (cartItem) => cartItem.item.id === action.payload.id
      )
      const newCartItem = {
        ...state.data.list[oldCartItemIndex],
        quantity: action.payload.quantity,
      }
      state.data.list.splice(oldCartItemIndex, 1, newCartItem)
      state.data.list = [...state.data.list]
    },
    clearCart: (state) => {
      state.data.list = []
    },
  },
})

export const storageCartReducer = storageCartSlice.reducer

export const { addToCart, removeFromCart, clearCart, changeItemQuantity } =
  storageCartSlice.actions
