import { Button, Flex, Icon, Input, Select, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { Category } from '../../../../mongo/models/category'
import { fetcher } from '../../../../utils/requests'

interface Query {
  category?: string
  searchTerm?: string
}

const Filters = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [category, setCategory] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  let query: Query = {}

  if (category) {
    query.category = category
  }

  if (category === 'all') {
    delete query.category
  }

  if (searchTerm) {
    query.searchTerm = searchTerm
  }

  useEffect(() => {
    fetcher('http://localhost:3000/api/categories')
      .then((newCategories) => {
        setCategories(newCategories)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Flex
      flexDirection="column"
      p="20px"
      borderRadius="6px"
      border="1px solid #C4C4C4"
    >
      <Text fontSize="24px" fontWeight="500" color="#2D3748">
        Wyszukaj części w magazynie
      </Text>
      <Flex
        flexDirection="row"
        justifyContent="space-around"
        mt="15px"
        fontSize="16px"
        fontWeight="500"
        color="#2D3748"
      >
        <Flex flexDirection="column" w="30%">
          <Text>Nazwa</Text>
          <Flex>
            <Input
              h="40px"
              border="1px solid #D4D4D4"
              fontWeight="400"
              placeholder="Nazwa Produktu"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Icon ml="10px" fontSize="30px" as={AiOutlineSearch} />
          </Flex>
        </Flex>
        <Flex flexDirection="column" w="30%">
          <Text>Kategoria</Text>
          <Select
            h="40px"
            border="1px solid #D4D4D4"
            fontWeight="400"
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="all">Wszystkie</option>
            {categories.map(({ name, id }) => (
              <option key={id} value={name}>
                {name}
              </option>
            ))}
          </Select>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" p="25px 0 5px 0">
        <Link href={{ query: { ...query } }}>
          <Button w="120px" h="40px" bgColor="#FF7700" color="white">
            Wyszukaj
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default Filters
