import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item, PopulatedItem } from '../../mongo/models/item'

interface State {
  items: PopulatedItem[]
}

const initialState: State = { items: [] }

export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<PopulatedItem[]>) => {
      state.items = action.payload
    },
    updateItem: (state, action: PayloadAction<PopulatedItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex === -1) return
      const copiedItems = [...state.items]
      copiedItems.splice(itemIndex, 1, action.payload)
      state.items = copiedItems
    },
    addItems: (state, action: PayloadAction<PopulatedItem[]>) => {
      state.items.push(...action.payload)},
    removeItem: (state, action: PayloadAction<PopulatedItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    addItem: (state, action: PayloadAction<PopulatedItem>) => {
      state.items = [action.payload, ...state.items]
    },
  },
})

export const itemsReducer = itemsSlice.reducer

export const { setItems, addItem, removeItem, updateItem, addItems } = itemsSlice.actions
