import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PopulatedSchema } from 'mongo'
import * as _ from 'lodash'

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
    deleteSchema: (state, action: PayloadAction<PopulatedSchema>) => {
      state.schemas = _.differenceBy(state.schemas, [action.payload], 'id')
    },
  },
})

export const schemasReducer = schemasSlice.reducer

export const { addSchema, setSchemas, deleteSchema } = schemasSlice.actions
