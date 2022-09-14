import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import _ from 'lodash'
import { User } from '../../mongo'

interface State {
  users: User[]
}

const initialState: State = { users: [] }

export const usersSlice = createSlice({
  name: 'usersSlice',
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload
    },
    deleteUser: (state, action: PayloadAction<User>) => {
      state.users = _.differenceBy(state.users, [action.payload], 'id')
    },
    updateUsers: (state, action: PayloadAction<User[]>) => {
      const copiedUsers = [...state.users]
      for (const changedUser of action.payload) {
        const userIndex = copiedUsers.findIndex(
          (user) => user.id === changedUser.id
        )
        if (userIndex === -1) copiedUsers.push(changedUser)

        copiedUsers.splice(userIndex, 1, changedUser)
      }

      state.users = copiedUsers
    },
  },
})

export const usersReducer = usersSlice.reducer

export const { setUsers, deleteUser, updateUsers } = usersSlice.actions
