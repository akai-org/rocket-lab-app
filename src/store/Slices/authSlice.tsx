import { createSlice } from '@reduxjs/toolkit'
import { PayloadAction } from '@reduxjs/toolkit'

type data = {
  idToken: string
  email: string
  role: string
}

type initialValues = {
  data: data
}

const initialState: initialValues = {
  data: {
    idToken: '',
    email: '',
    role: '',
  },
}

export const authSlice = createSlice({
  name: 'authSlice',
  initialState,
  reducers: {
    setAuth: (state, action: PayloadAction<data>) => {
      state.data = action.payload
    },
    clearAuth: (state) => {
      state.data = {
        idToken: '',
        email: '',
        role: '',
      }
    },
  },
})

export const authReducer = authSlice.reducer

export const { setAuth, clearAuth } = authSlice.actions
