import { Schema, Model, models, model } from 'mongoose'

export interface Category {
  id: Schema.Types.ObjectId
  name: string
}

const categorySchema = new Schema<Category>({
  name: { type: String, required: true },
})

export const CategoryModel =
  (models.Category as Model<Category>) || model('Category', categorySchema)
