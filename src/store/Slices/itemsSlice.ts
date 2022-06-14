import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item, PopulatedItem } from '../../mongo/models/item'
import { SortType } from '../../services/itemsService'

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
      state.items.push(...action.payload)
    },
    removeItem: (state, action: PayloadAction<PopulatedItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
    addItem: (state, action: PayloadAction<PopulatedItem>) => {
      state.items = [action.payload, ...state.items]
    },
    resortItems: (state, action: PayloadAction<SortType>) => {
      switch (action.payload) {
        case 'newest':
          state.items = [...state.items].sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
              return -1
            }
            if (a.updatedAt < b.updatedAt) {
              return 1
            }

            return 0
          })
          break
        case 'oldest':
          state.items = [...state.items].sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
              return 1
            }
            if (a.updatedAt < b.updatedAt) {
              return -1
            }

            return 0
          })
          break
        case 'alphabetically':
          state.items = [...state.items].sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
              return 1
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
              return -1
            }

            return 0
          })
          break
      }
    },
  },
})

export const itemsReducer = itemsSlice.reducer

export const {
  setItems,
  addItem,
  removeItem,
  updateItem,
  addItems,
  resortItems,
} = itemsSlice.actions
