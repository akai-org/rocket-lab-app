export const validateSortParam = (sortParam: string | undefined): boolean => {
  if (!sortParam) return false

  const allowedValues = ['newest', 'oldest', 'alphabetically']

  return allowedValues.includes(sortParam.toLowerCase())
}
