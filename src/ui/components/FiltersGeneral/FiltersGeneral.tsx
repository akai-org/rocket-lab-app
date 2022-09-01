import { useRouter } from 'next/router'
import React, { memo, useEffect, useState } from 'react'
import { Category } from 'mongo'
import { API_URL } from 'utils/constants'
import { fetcher } from 'utils/requests'

interface Query {
  category?: string
  searchTerm?: string | string[]
}

export interface FiltersControllsProps {
  categories: Category[]
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  searchTerm: string
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
}

interface Props {
  children: (controlls: FiltersControllsProps) => JSX.Element
}

export const FiltersGeneral: React.FC<Props> = memo(({ children }) => {
  const router = useRouter()
  const query = router.query

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

  let searchQuery: Query = {}

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

  useEffect(() => {
    fetcher(API_URL + '/api/categories')
      .then((newCategories) => {
        setCategories(newCategories)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(searchQuery)
    router.push({ query: { ...query, ...searchQuery } })
  }

  return children({
    categories,
    category,
    setCategory,
    searchTerm,
    setSearchTerm,
    handleSubmit,
  })
})
