import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PopulatedItem } from '../../mongo/models/item'
import { SortType } from '../../services/itemsService'

interface State {
  items: PopulatedItem[]
  displayItems: PopulatedItem[]
  searchTerm?: string
  category?: string
  sorting: SortType
}

const initialState: State = { items: [], displayItems: [], sorting: 'newest' }

export const itemsSlice = createSlice({
  name: 'itemsSlice',
  initialState,
  reducers: {
    setCategory: (state, action: PayloadAction<string | undefined>) => {
      state.category = !action.payload ? undefined : action.payload
      filterItems(state)
    },
    setSearchTerm: (state, action: PayloadAction<string | undefined>) => {
      state.searchTerm = !action.payload ? undefined : action.payload
      filterItems(state)
    },
    setItems: (state, action: PayloadAction<PopulatedItem[]>) => {
      state.items = action.payload
      state.displayItems = action.payload
    },
    resetDisplayItems: (state) => {
      state.displayItems = state.items
    },
    updateItem: (state, action: PayloadAction<PopulatedItem>) => {
      const itemIndex = state.items.findIndex(
        (item) => item.id === action.payload.id
      )
      if (itemIndex === -1) return
      const copiedItems = [...state.items]
      copiedItems.splice(itemIndex, 1, action.payload)
      state.items = copiedItems

      filterItems(state)
      resort(state)
    },
    addItems: (state, action: PayloadAction<PopulatedItem[]>) => {
      state.items.push(...action.payload)

      filterItems(state)
      resort(state)
    },
    removeItem: (state, action: PayloadAction<PopulatedItem>) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
      state.displayItems = state.displayItems.filter(
        (item) => item.id !== action.payload.id
      )

      filterItems(state)
      resort(state)
    },
    addItem: (state, action: PayloadAction<PopulatedItem>) => {
      state.items = [action.payload, ...state.items]

      filterItems(state)
      resort(state)
    },
    setSorting: (state, action: PayloadAction<SortType>) => {
      state.sorting = action.payload
      resort(state)
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
  setSorting,
  resetDisplayItems,
  setCategory,
  setSearchTerm,
} = itemsSlice.actions
function resort(state: State) {
  switch (state.sorting) {
    case 'newest':
      state.displayItems = [...state.displayItems].sort((a, b) => {
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
      state.displayItems = [...state.displayItems].sort((a, b) => {
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
      state.displayItems = [...state.displayItems].sort((a, b) => {
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
}

function filterItems(state: State) {
  const regex = state.searchTerm ? new RegExp(state.searchTerm, 'i') : undefined
  state.displayItems = state.items.filter((item) => {
    const includesSearchedCategory = item.categories.some(
      (category) => category.name === state.category
    )
    // Fires when nor category, neither searchTerm are provided
    if (!state.category && !state.searchTerm) return true
    // Fires when no category is selected
    if (
      !state.category &&
      (regex?.test(item.name) || regex?.test(item.description))
    )
      return true
    // Fires when no searchTerm is provided
    if (!state.searchTerm && includesSearchedCategory) return true
    // Fires when both category and searchTerm is provided
    if (
      (regex?.test(item.name) || regex?.test(item.description)) &&
      includesSearchedCategory
    ) {
      return true
    }
  })
}
