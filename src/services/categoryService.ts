import { CategoryModel, Category } from '../mongo/models/category'
import { Types } from 'mongoose'

export async function fetchCategories(): Promise<Category[]> {
  const categories = await CategoryModel.find()
  return categories
}

export async function addCategory(name: string): Promise<Category> {
  const createdCategory = await CategoryModel.create({ name })
  return createdCategory
}

export async function deleteCategories(categoriesIds: string[]) {
  console.log(categoriesIds)
  const deletedCategories = await CategoryModel.find({
    id: { $in: categoriesIds },
  })

  await CategoryModel.deleteMany({
    _id: { $in: categoriesIds },
  })

  return deletedCategories
}
