import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryLog } from '../../mongo/models/history'
import { StateWithSorting } from '../../utils/types/backendGeneral'

interface State extends StateWithSorting {
  logs: HistoryLog[]
}

const initialState: State = { logs: [], sorting: 'newest' }

export const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
    setLogs: (state, action: PayloadAction<HistoryLog[]>) => {
      state.logs = action.payload
    },
  },
})

export const historyReducer = historySlice.reducer

export const {setLogs} = historySlice.actions
