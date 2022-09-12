import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { PopulatedSchema } from '../../mongo/models/schema'
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
    updateSchema: (state, action: PayloadAction<PopulatedSchema>) => {
      const copiedSchemas = [...state.schemas]
      const schemaIndex = copiedSchemas.findIndex(
        (schema) => schema.id === action.payload.id
      )
      if (schemaIndex === -1) return

      copiedSchemas.splice(schemaIndex, 1, action.payload)

      state.schemas = copiedSchemas
    },
  },
})

export const schemasReducer = schemasSlice.reducer

export const { addSchema, setSchemas, deleteSchema, updateSchema } =
  schemasSlice.actions
