import { Schema, Model, models, model } from 'mongoose'

export interface User {
  _id: string
  role: 'reader' | 'editor' | 'admin'
}

const userSchema = new Schema<User>(
  {
    _id: { type: String, required: [true, 'Auth0 user id must be specified'] },
    role: { default: 'reader' },
  },
  { _id: false }
)

export const userModel =
  (models.User as Model<User>) || model('User', userSchema)
