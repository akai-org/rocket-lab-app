import { CategoryModel, Category } from '../mongo/models/category'

export async function fetchCategories(): Promise<Category[]> {
  const categories = await CategoryModel.find()
  return categories
}

export async function addCategory(name: string): Promise<Category> {
  const createdCategory = await CategoryModel.create({ name })
  return createdCategory
}

export async function deleteCategories(categoriesIds: string[]) {
  const deletedCategories = await CategoryModel.find({
    _id: { $in: categoriesIds },
  })

  await CategoryModel.deleteMany({
    _id: { $in: categoriesIds },
  })

  return deletedCategories
}

export async function updateCategory(categoryId: string, newName: string) {
  const updatedCategory = await CategoryModel.findByIdAndUpdate(
    categoryId,
    { name: newName },
    { new: true }
  )
  return updatedCategory
}
