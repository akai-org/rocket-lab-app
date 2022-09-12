import {
  PopulatedSchema,
  PopulatedSchemaItem,
  SchemaItem,
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

export const addSchemaItem = async (
  schemaId: string,
  schemaItem: SchemaItem
) => {
  return await SchemaModel.findByIdAndUpdate(
    schemaId,
    {
      $push: {
        items: schemaItem,
      },
    },
    { new: true }
  ).populate('items.item')
}

export const deleteSchemaItem = async (schemaId: string, itemId: string) => {
  return await SchemaModel.findByIdAndUpdate(
    schemaId,
    { $pull: { items: { _id: itemId } } },
    { new: true }
  ).populate('items.item')
}

export const updateSchema = async (
  schemaId: string,
  schemaItems: PopulatedSchemaItem[],
  schemaName: string,
  schemaDescription: string
) => {
  const parsedItems = schemaItems.map((item) => ({
    ...item,
    item: item.item.id,
  }))

  return await SchemaModel.findByIdAndUpdate(
    schemaId,
    { name: schemaName, description: schemaDescription, items: parsedItems },
    { new: true }
  ).populate('items.item')
}
