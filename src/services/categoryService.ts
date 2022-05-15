import { CategoryModel, Category } from '../mongo/models/category'

export async function fetchCategories(): Promise<Category[]> {
  const categories = await CategoryModel.find()
  return categories
}

export async function addCategory(name: string): Promise<Category> {
  const createdCategory = await CategoryModel.create({ name })
  return createdCategory
}
