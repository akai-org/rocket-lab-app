import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { HistoryLog } from '../../mongo/models/history'
import { StateWithSorting } from '../../utils/types/backendGeneral'

interface Filters {
  toFilter?: string
  fromFilter?: string
}

interface State extends StateWithSorting {
  logs: HistoryLog[]
  displayLogs: HistoryLog[]
  filters: Filters
}

const initialState: State = {
  logs: [],
  displayLogs: [],
  sorting: 'newest',
  filters: {},
}

export const historySlice = createSlice({
  name: 'historySlice',
  initialState,
  reducers: {
    setLogs: (state, action: PayloadAction<HistoryLog[]>) => {
      state.logs = action.payload
      state.displayLogs = action.payload
    },
    setFilters: (state, action: PayloadAction<Filters>) => {
      state.filters = action.payload

      // filtering

      const fromFilter = getFilterDates(action.payload.fromFilter)
      const toFilter = getFilterDates(action.payload.toFilter, 24)

      console.log({ fromFilter, toFilter })

      state.displayLogs = state.logs.filter((log) => {
        if (fromFilter && !toFilter) {
          return new Date(log.createdAt) >= fromFilter
        }
        if (toFilter && !fromFilter) {
          return new Date(log.createdAt) <= toFilter
        }
        if (toFilter && fromFilter) {
          return (
            new Date(log.createdAt) >= fromFilter &&
            new Date(log.createdAt) <= toFilter
          )
        }
        return false
      })
    },
  },
})

export const historyReducer = historySlice.reducer

export const { setLogs, setFilters } = historySlice.actions

function getFilterDates(filterDate?: string, offset = 0) {
  if (!filterDate) return undefined

  const parsedFromFilter = filterDate.split('.')
  if (
    !parsedFromFilter ||
    !Array.isArray(parsedFromFilter) ||
    !parsedFromFilter[0] ||
    !parsedFromFilter[1] ||
    !parsedFromFilter[2]
  ) {
    return
  }
  return new Date(
    new Date(
      new Date().setFullYear(
        +parsedFromFilter[2],
        +parsedFromFilter[1] - 1,
        +parsedFromFilter[0]
      )
    ).setHours(0 + offset, 0, 0, 0)
  )
}
