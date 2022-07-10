import {
  PopulatedSchema,
  SchemaModel,
  TmpSchemaItem,
} from '../mongo/models/schema'

export const addSchema = async ({
  description,
  schemaItems,
  name,
}: {
  name?: string
  description?: string
  schemaItems?: TmpSchemaItem[]
}): Promise<PopulatedSchema> => {
  const preparedItems = schemaItems?.map((schemaItem) => ({
    neededQuantity: schemaItem.neededQuantity,
    item: schemaItem.item.id,
  }))

  console.log({ preparedItems })

  return await (
    await SchemaModel.create({ name, description, items: preparedItems })
  ).populate('items.item')
}

export const fetchSchemas = async () => {
  return await SchemaModel.find().populate('items.item')
}

export const deleteSchema = async (id: string) => {
  return await SchemaModel.findOneAndDelete(
    { _id: id },
    { new: true, populate: 'items.item' }
  )
}
