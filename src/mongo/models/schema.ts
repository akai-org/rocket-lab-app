import { Schema as MongoSchema, Model, models, model } from 'mongoose'
import { PopulatedItem } from './item'

export interface Schema {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  items: SchemaItem[]
}

export interface SchemaItem {
  id: string
  neededQuantity: number
  item: string
}

export interface populatedSchema extends Omit<SchemaItem, 'item'> {
  item: PopulatedItem
}

const SchemaSchema = new MongoSchema<Schema>({
  name: { type: String, required: [true, 'Schema name must be provided'] },
  items: [
    {
      type: MongoSchema.Types.ObjectId,
      ref: 'Item',
      required: [true, 'Item id must be provided'],
    },
  ],
})

export const SchemaModel =
  (models.Schema as Model<Schema>) || model('Schema', SchemaSchema)
