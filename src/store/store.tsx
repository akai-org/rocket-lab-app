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

const reducers = combineReducers({
  authData: authReducer,
  storageCartData: storageCartReducer,
  categoriesData: categoriesReducer,
  itemsData: itemsReducer,
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
export const itemsInfo = (state: RootState) => state.itemsData
