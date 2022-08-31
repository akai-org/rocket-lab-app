import { useRouter } from 'next/router'
import { useState, useEffect } from 'react'
import { Category } from '../../mongo/models/category'
import { API_URL } from '../constants'
import { fetcher } from '../requests'
import queryString from 'query-string'

interface Query {
  category?: string
  searchTerm?: string | string[]
}

// interface CustomQueryFilter {
//   paramName: string
//   value: string | undefined
// }

export function useFilters(customFilters: string[] = []) {
  const router = useRouter()
  const query = queryString.parseUrl(router.asPath).query

  const queryCategory = query.category as string | undefined
  const querySearchTerm = query.searchTerm as string | undefined

  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState(
    queryCategory ? queryCategory : 'all'
  )
  const [searchTerm, setSearchTerm] = useState(
    querySearchTerm ? querySearchTerm : ''
  )

  delete query.page

  delete query.category

  const searchQuery: Query = {}
  const [customQuery, setCustomQuery] = useState<{
    [key: string]: string | undefined
  }>(() => {
    const tmp: { [key: string]: string | undefined } = {}
    for (const custom of customFilters) {
      tmp[custom] = query[custom] as string | undefined
    }
    return tmp
  })

  if (category) {
    searchQuery.category = category
  }

  if (searchTerm) {
    searchQuery.searchTerm = searchTerm
  } else {
    searchQuery.searchTerm = []
  }

  if (category === 'all') {
    delete searchQuery.category
  }

  for (const key in query) {
    if (key === 'sort') continue
    if (!query[key] || !customQuery[key] || query[key]?.length === 0) {
      delete query[key]
    }
  }

  useEffect(() => {
    fetcher(API_URL + '/api/categories')
      .then((newCategories) => {
        setCategories(newCategories)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    for (const custom in customQuery) {
      if (!customQuery[custom]) {
        delete customQuery[custom]
      }
    }

    console.log({ query, customQuery })
    router.push({ query: { ...query, ...searchQuery, ...customQuery } })
  }

  return {
    categories,
    category,
    setCategory,
    searchTerm,
    setSearchTerm,
    handleSubmit,
    query,
    customQuery,
    setCustomQuery,
  }
}
