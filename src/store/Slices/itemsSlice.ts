import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from '../../mongo/models/item'

interface State {
  items: Item[]
}

const initialState: State = { items: [] }

const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {
    setItems: (state, action: PayloadAction<Item[]>) => {
      state.items = action.payload
    },
    updateItem: (state, action: PayloadAction<Item>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex === -1) return
      const copiedItems = [...state.items]
      copiedItems.splice(itemIndex, 1, action.payload)
      state.items = copiedItems
    },
    deleteItem: (state, action: PayloadAction<Item>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    addItem: (state, action: PayloadAction<Item>) => {
      const copiedItems = [...state.items]
      copiedItems.splice(0, 0, action.payload)
      state.items = copiedItems
    },
    addItems: (state, action: PayloadAction<Item[]>) => {
      state.items.push(...action.payload)
    },
  },
})

export const itemReducer = itemsSlice.reducer

export const { addItem, deleteItem, setItems, updateItem, addItems } =
  itemsSlice.actions
