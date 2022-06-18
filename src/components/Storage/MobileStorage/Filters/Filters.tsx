import React, { useState } from 'react'
import {
  Flex,
  Icon,
  Input,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  Text,
  useDisclosure,
  Select,
  Stack,
} from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { IoFilterSharp } from 'react-icons/io5'
import { FiltersControllsProps } from '../../../UI/FiltersGeneral/FiltersGeneral'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import { useFilters } from '../../../../utils/effects/useFilters'

interface Props {
  setIsFiltersOpen: (isOpen: boolean) => void
}

const Filters: React.FC<Props> = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const {
    categories,
    category,
    handleSubmit,
    query,
    searchTerm,
    setCategory,
    setSearchTerm,
  } = useFilters()
  return (
    <Flex
      flexDirection="column"
      position="fixed"
      left="0"
      bottom="0"
      h="60px"
      w="100%"
      minW="300px"
      border="1px solid #D4D4D4"
      borderRadius="6px"
      bgColor="white"
    >
      <Flex flexDirection="column" justifyContent="space-between" h="60px">
        {isOpen ? (
          <Drawer placement="bottom" onClose={onClose} isOpen={isOpen}>
            <DrawerOverlay onClick={() => props.setIsFiltersOpen(false)} />
            <DrawerContent h="230px">
              <DrawerBody>
                <form
                  onSubmit={(e) => {
                    handleSubmit(e)
                    onClose()
                    props.setIsFiltersOpen(false)
                  }}
                >
                  <Flex my="10px" justifyContent="space-between">
                    <Text fontWeight="500" noOfLines={1}>
                      Filtruj obiekty
                    </Text>
                    <Flex m="auto 10px" lineHeight="20px">
                      <Icon
                        h="6"
                        w="6"
                        as={AiOutlineClose}
                        onClick={() => {
                          onClose()
                          props.setIsFiltersOpen(false)
                        }}
                      />
                    </Flex>
                  </Flex>
                  <Flex
                    flexDirection="row"
                    alignItems="center"
                    justifyContent="flex-start"
                    h="30px"
                    mt="20px"
                  >
                    <Input
                      placeholder="Wyszukaj"
                      h="32px"
                      w="100%"
                      border="1px solid #D4D4D4"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <Icon h="6" w="6" ml="5px" mr="10px" as={AiOutlineSearch} />
                  </Flex>
                  <Select
                    onChange={(e) => setCategory(e.target.value)}
                    value={(query.category as string | undefined) || category}
                    fontSize="14px"
                    h="32px"
                    mt="20px"
                  >
                    <option value="all">Wszystkie</option>
                    {categories.map(({ name, id }) => (
                      <option key={id} value={name}>
                        {name}
                      </option>
                    ))}
                  </Select>
                  <Stack>
                    <ProductButton
                      ml="auto"
                      h="32px"
                      w="90px"
                      mt="20px"
                      bgColor="#FF7700"
                      color="white"
                      fontSize="14px"
                      fontWeight="600"
                      lineHeight="32px"
                      type="submit"
                    >
                      Wyszukaj
                    </ProductButton>
                  </Stack>
                </form>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
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
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Icon h="6" w="6" ml="5px" as={AiOutlineSearch} />
            </Flex>
            <Flex pt="5px">
              <Text
                mr="5px"
                fontSize="16px"
                onClick={() => {
                  onOpen()
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
                  props.setIsFiltersOpen(true)
                }}
              />
            </Flex>
          </Flex>
        )}
      </Flex>
    </Flex>
  )
}

export default Filters
