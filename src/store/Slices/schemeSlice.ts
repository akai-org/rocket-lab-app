import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PopulatedItem } from '../../mongo/models/item'

interface State {
  items: PopulatedItem[]
}

const initialState: State = { items: [] }

export const schemeSlice = createSlice({
  name: 'schemeSlice',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<PopulatedItem | undefined>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload?.id
      )
      if (action.payload && index !== -1)
        state.items[index].quantity += action.payload.quantity
      else if (action.payload && index === -1)
        state.items = [action.payload, ...state.items]
    },
    removeItem: (state, action: PayloadAction<PopulatedItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    changeItem: (state, action: PayloadAction<PopulatedItem>) => {
      const index = state.items.findIndex(
        (item) => item.id === action.payload?.id
      )
      state.items[index] = action.payload
    },
  },
})

export const schemeReducer = schemeSlice.reducer

export const { addItem, removeItem, changeItem } = schemeSlice.actions
