import { configureStore } from '@reduxjs/toolkit'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { combineReducers } from 'redux'
import { authReducer } from './Slices'
import { storageCartReducer } from './Slices'
import { categoriesReducer } from './Slices'
import { itemsReducer } from './Slices'
import { schemasReducer } from './Slices'
import { historyReducer } from './Slices/historySlice'
import { usersReducer } from './Slices/usersSlice'

const reducers = combineReducers({
  authData: authReducer,
  storageCartData: storageCartReducer,
  categoriesData: categoriesReducer,
  itemsData: itemsReducer,
  schemeData: schemasReducer,
  historyData: historyReducer,
  usersData: usersReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

type RootState = ReturnType<typeof store.getState>
export const authInfo = (state: RootState) => state.authData.data
export const storageCartInfo = (state: RootState) => state.storageCartData
export const categoriesInfo = (state: RootState) => state.categoriesData
export const schemeInfo = (state: RootState) => state.schemeData
export const itemsInfo = (state: RootState) => state.itemsData
export const historyInfo = (state: RootState) => state.historyData
export const usersInfo = (state: RootState) => state.usersData

export default store
