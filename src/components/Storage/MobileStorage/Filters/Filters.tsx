import React, { useState } from 'react'
import {
  Button,
  Flex,
  Icon,
  Input,
  Select,
  Text,
} from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { IoFilterSharp } from 'react-icons/io5'
import { FiltersControllsProps } from '../../../UI/FiltersGeneral/FiltersGeneral'

interface Props extends FiltersControllsProps {
  setIsFiltersOpen: (isOpen: boolean) => void
}

const Filters: React.FC<Props> = (props) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  return (
    <form onSubmit={props.handleSubmit}>
      <Flex
        flexDirection="column"
        position="fixed"
        left="0"
        bottom="0"
        h={isFilterVisible ? '230px' : '60px'}
        w="100%"
        minW="300px"
        border="1px solid #D4D4D4"
        borderRadius="6px"
        bgColor="white"
      >
        <Flex flexDirection="column" justifyContent="space-between" h="60px">
          {isFilterVisible ? (
            <>
              <Flex my="15px" ml="10px" justifyContent="space-between">
                <Text fontWeight="500">Filtruj obiekty</Text>
                <Flex m="auto 10px" lineHeight="20px">
                  <Icon
                    h="6"
                    w="6"
                    as={AiOutlineClose}
                    onClick={() => {
                      setIsFilterVisible(false)
                      props.setIsFiltersOpen(false)
                    }}
                  />
                </Flex>
              </Flex>
              <Flex
                flexDirection="row"
                alignItems="center"
                justifyContent="flex-start"
                mx="10px"
                h="30px"
              >
                <Input
                  placeholder="Wyszukaj"
                  h="30px"
                  w="100%"
                  border="1px solid #D4D4D4"
                  value={props.searchTerm}
                  onChange={(e) => props.setSearchTerm(e.target.value)}
                />
                <Icon h="6" w="6" ml="5px" mr="20px" as={AiOutlineSearch} />
              </Flex>
              <Flex flexDirection="column" p="0 30px 0 10px" fontSize="16px">
                <Text m="7px 0" fontWeight="500">
                  Kategoria
                </Text>
                <Select
                  onChange={(e) => props.setCategory(e.target.value)}
                  value={props.category}
                  fontSize="14px"
                  h="32px"
                >
                  <option value="all">Wszystkie</option>
                  {props.categories.map(({ name, id }) => (
                    <option key={id} value={name}>
                      {name}
                    </option>
                  ))}
                </Select>
                <Button
                  h="32px"
                  ml="auto"
                  mt="20px"
                  bgColor="#FF7700"
                  color="white"
                  fontSize="14px"
                  fontWeight="600"
                  lineHeight="32px"
                  type="submit"
                >
                  Zapisz
                </Button>
              </Flex>
            </>
          ) : (
            <Flex
              mx="10px"
              my="auto"
              justifyContent="space-between"
              lineHeight="20px"
            >
              <Flex flexDirection="row" alignItems="center" h="30px">
                <Input
                  placeholder="Wyszukaj"
                  h="30px"
                  w="200px"
                  border="1px solid #D4D4D4"
                  value={props.searchTerm}
                  onChange={(e) => props.setSearchTerm(e.target.value)}
                />
                <Icon h="6" w="6" ml="5px" as={AiOutlineSearch} />
              </Flex>
              <Flex pt="5px">
                <Text
                  mr="5px"
                  fontSize="16px"
                  onClick={() => {
                    setIsFilterVisible(true)
                    props.setIsFiltersOpen(true)
                  }}
                >
                  Filtry
                </Text>
                <Icon
                  h="5"
                  w="5"
                  as={IoFilterSharp}
                  onClick={() => {
                    setIsFilterVisible(true)
                    props.setIsFiltersOpen(true)
                  }}
                />
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </form>
  )
}

export default Filters
