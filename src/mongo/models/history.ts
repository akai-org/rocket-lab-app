import { Schema, Model, models, model } from 'mongoose'

export type HistoryLogType = 'added' | 'distributed' | 'removed' | 'modified'

export type ResourceType = 'item' | 'schema' | 'cartList'

export interface Resource {
  name: string
  id: string
  type: ResourceType
  description?: string
}

export interface HistoryLog {
  type: HistoryLogType
  id: string
  author: string
  resource: Resource
  created_at: Date
  modified_at: Date
}

const HistoryResourceSchema = new Schema<Resource>({
  description: { type: String, required: false },
  type: { type: String, required: [true, 'Please, provide resource type'] },
  name: { type: String, required: [true, 'Please, provide resource name'] },
})

const HistoryLogSchema = new Schema<HistoryLog>(
  {
    author: { type: String, required: [true, 'Author name must be provided'] },
    resource: HistoryResourceSchema,
  },
  { timestamps: true }
)

export const SchemaModel =
  (models.HistoryLog as Model<HistoryLog>) || model('HistoryLog', HistoryLogSchema)