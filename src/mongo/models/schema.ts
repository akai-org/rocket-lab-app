import mongoose from 'mongoose'
import { Schema as MongoSchema, Model, models, model } from 'mongoose'
import { PopulatedItem } from './item'

export interface Schema {
  id: string
  createdAt: Date
  updatedAt: Date
  name: string
  items: SchemaItem[]
  description: string
}

export interface SchemaItem {
  id: string
  neededQuantity: number
  item: mongoose.Types.ObjectId
}

export interface PopulatedSchemaItem extends Omit<SchemaItem, 'item'> {
  item: PopulatedItem
}

export type TmpSchemaItem = Omit<PopulatedSchemaItem, 'id'>

export interface PopulatedSchema extends Omit<SchemaItem, 'item'> {
  item: PopulatedItem
}

const SchemaItemSchema = new MongoSchema<SchemaItem>({
  neededQuantity: {
    type: Number,
    required: [true, 'Needed quantity is required'],
  },
  item: {
    type: MongoSchema.Types.ObjectId,
    ref: 'Item',
    required: [true, 'Item id must be provided'],
  },
})

const SchemaSchema = new MongoSchema<Schema>(
  {
    name: { type: String, required: [true, 'Schema name must be provided'] },
    items: [SchemaItemSchema],
    description: {
      type: String,
      required: [true, 'Schema description must be provided'],
    },
  },
  { timestamps: true }
)

export const SchemaModel =
  (models.Schema as Model<Schema>) || model('Schema', SchemaSchema)
