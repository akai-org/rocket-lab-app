import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { User } from '../../mongo'

interface State {
  users: User[]
}

const initialState: State = { users: [] }

export const schemasSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      state.users = _.differenceBy(state.users, [action.payload], 'id')
    },
    updateUser: (state, action: PayloadAction<User>) => {
      const copiedUsers = [...state.users]
      const userIndex = copiedUsers.findIndex(
        (user) => user.id === action.payload.id
      )
      if (userIndex === -1) return

      copiedUsers.splice(userIndex, 1, action.payload)

      state.users = copiedUsers
    },
  },
})

export const schemasReducer = schemasSlice.reducer

export const { setUsers, deleteUser, updateUser } = schemasSlice.actions
