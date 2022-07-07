import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PopulatedSchema } from '../../mongo/models/schema'

interface State {
  schemas: PopulatedSchema[]
}

const initialState: State = { schemas: [] }

export const schemasSlice = createSlice({
  name: 'schemasSlice',
  initialState,
  reducers: {
    addSchema: (state, action: PayloadAction<PopulatedSchema>) => {
      state.schemas.push(action.payload)
    },
    setSchemas: (state, action: PayloadAction<PopulatedSchema[]>) => {
      state.schemas = action.payload
    },
    addSchemaItem: (state, action: PayloadAction<>) => {}
  },
})

export const schemasReducer = schemasSlice.reducer

export const { addSchema, setSchemas } = schemasSlice.actions
