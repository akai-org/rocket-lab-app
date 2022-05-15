import { Button, Flex, Icon, Input, Select, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Category } from '../../../mongo/models/category'
import { fetcher } from '../../../utils/requests'

interface Query {
  category?: string
  searchTerm?: string
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

const FiltersGeneral: React.FC<Props> = ({ children }) => {
  const router = useRouter()

  const queryCategory = router.query.category as string | undefined
  const querySearchTerm = router.query.searchTerm as string | undefined

  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState(
    queryCategory ? queryCategory : 'all'
  )
  const [searchTerm, setSearchTerm] = useState(
    querySearchTerm ? querySearchTerm : ''
  )

  let query: Query = {}

  if (category) {
    query.category = category
  }

  if (searchTerm) {
    query.searchTerm = searchTerm
  }

  if (category === 'all') {
    delete query.category
  }

  useEffect(() => {
    fetcher('http://localhost:3000/api/categories')
      .then((newCategories) => {
        setCategories(newCategories)
      })
      .catch((error) => console.log(error))
  }, [])

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    router.push({ query: { ...query } })
  }

  return children({
    categories,
    category,
    setCategory,
    searchTerm,
    setSearchTerm,
    handleSubmit,
  })
}

export default FiltersGeneral