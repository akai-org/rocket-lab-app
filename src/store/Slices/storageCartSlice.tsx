import { createSlice, current } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'
import { PopulatedCartList } from '../../mongo/models/cart'
import { Item } from '../../mongo/models/item'
export interface CartItem {
  item: Item
  quantity: number
}

type state = {
  cartLists: PopulatedCartList[]
  newCartList: CartItem[]
}

const initialState: state = {
  cartLists: [],
  newCartList: [],
}

export const storageCartSlice = createSlice({
  name: 'storageCartSlice',
  initialState,
  reducers: {
    setExistingCartLists: (
      state,
      action: PayloadAction<PopulatedCartList[]>
    ) => {
      state.cartLists = action.payload
    },
    updateExistingCartLists: (
      state,
      action: PayloadAction<PopulatedCartList>
    ) => {
      const index = state.cartLists.findIndex(
        ({ id }) => id === action.payload.id
      )
      const newList = [...state.cartLists]
      newList.splice(index, 1, action.payload)
      state.cartLists = newList
    },
    removeExisitngCartList: (
      state,
      action: PayloadAction<PopulatedCartList>
    ) => {
      state.cartLists = state.cartLists.filter(
        (cart) => cart.id !== action.payload.id
      )
    },
    addToCart: (state, action: PayloadAction<Item>) => {
      if (
        !state.newCartList.some(
          (cartItem) => cartItem.item.id === action.payload.id
        )
      ) {
        state.newCartList.push({ quantity: 1, item: action.payload })
      }
    },
    removeFromCart: (state, action: PayloadAction<Item>) => {
      state.newCartList = state.newCartList.filter(
        (cart) => cart.item.id !== action.payload.id
      )
    },
    changeItemQuantity: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>
    ) => {
      const oldCartItemIndex = state.newCartList.findIndex(
        (cartItem) => cartItem.item.id === action.payload.id
      )
      const newCartItem = {
        ...state.newCartList[oldCartItemIndex],
        quantity: action.payload.quantity,
      }
      state.newCartList.splice(oldCartItemIndex, 1, newCartItem)
      state.newCartList = [...state.newCartList]
    },
    clearCart: (state) => {
      console.log('clearing cart')
      state.newCartList = []
    },
  },
})

export const storageCartReducer = storageCartSlice.reducer

export const {
  addToCart,
  removeFromCart,
  clearCart,
  changeItemQuantity,
  setExistingCartLists,
  updateExistingCartLists,
  removeExisitngCartList,
} = storageCartSlice.actions
