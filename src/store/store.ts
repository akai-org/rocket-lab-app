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
import { authReducer } from './Slices/authSlice'
import { storageCartReducer } from './Slices/storageCartSlice'
import { categoriesReducer } from './Slices/categoriesSlice'
import { itemsReducer } from './Slices/itemsSlice'
import { schemasReducer } from './Slices/schemasSlice'
import { historyReducer } from './Slices/historySlice'

const reducers = combineReducers({
  authData: authReducer,
  storageCartData: storageCartReducer,
  categoriesData: categoriesReducer,
  itemsData: itemsReducer,
  schemeData: schemasReducer,
  historyData: historyReducer,
})

const persistConfig = {
  key: 'root',
  version: 1,
  storage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export default store

type RootState = ReturnType<typeof store.getState>
export const authInfo = (state: RootState) => state.authData.data
export const storageCartInfo = (state: RootState) => state.storageCartData
export const categoriesInfo = (state: RootState) => state.categoriesData
export const schemeInfo = (state: RootState) => state.schemeData
export const itemsInfo = (state: RootState) => state.itemsData
export const historyInfo = (state: RootState) => state.historyData
