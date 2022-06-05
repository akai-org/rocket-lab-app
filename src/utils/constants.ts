export const ITEMS_QUERY_LIMIT = 15
export const FIRST_PAGE = 1

export const API_URL =
  typeof window !== 'undefined' ? window.location.origin : process.env.API_URL

export const IS_DEV = process.env.NODE_ENV === 'development'
