import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../mongo/models/item'

interface State {
  items: Item[]
}

const initialState: State = { items: [] }

export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
    },
    removeItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const index = state.items.findIndex(({ id }) => id === action.payload.id)
      if (index !== -1) {
        const newList = [...state.items]
        newList.splice(index, 1, action.payload)
        state.items = newList
      }
    },
    addItem: (state, action: PayloadAction<Item>) => {
      state.items = [action.payload, ...state.items]
    },
  },
})

export const itemsReducer = itemsSlice.reducer

export const { setItems, addItem, removeItem, updateItem } = itemsSlice.actions
