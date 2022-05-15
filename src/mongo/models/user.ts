import { Schema, Model, models, model } from 'mongoose'
import { adminRoles as userRoles } from '../../utils/types/backendGeneral'

export interface User {
  id: string
  _id: Schema.Types.ObjectId
  role: userRoles
  email: string
  name: string
}

const userSchema = new Schema<User>(
  {
    _id: { type: String, required: [true, 'Auth0 user id must be specified'] },
    role: { default: 'reader', type: String },
    email: { type: String, required: [true, 'User email must be provided'] },
    name: { type: String, required: [true, 'User name must be provided'] },
  },
  { _id: false }
)

export const userModel =
  (models.User as Model<User>) || model('User', userSchema)
