import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Category } from '../../mongo/models/category'

interface State {
  categories: Category[]
}

const initialState: State = { categories: [] }

export const categoriesSlice = createSlice({
  name: 'categoriesSlice',
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = action.payload
    },
    addCategory: (state, action: PayloadAction<Category>) => {
      state.categories = [...state.categories, action.payload]
    },
    removeCategories: (state, action: PayloadAction<Category[]>) => {
      state.categories = state.categories.filter(
        (category) =>
          !action.payload.some(
            (removalCategory) => removalCategory.id === category.id
          )
      )
    },
    updateCategory: (state, action: PayloadAction<Category>) => {
      const copiedCategories = [...state.categories]

      const index = copiedCategories.findIndex(
        (category) => category.id === action.payload.id
      )

      if (index === -1) return

      copiedCategories.splice(index, 1, action.payload)

      state.categories = copiedCategories
    },
  },
})

export const categoriesReducer = categoriesSlice.reducer

export const { addCategory, removeCategories, setCategories, updateCategory } =
  categoriesSlice.actions
