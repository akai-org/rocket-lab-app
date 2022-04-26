import React, { useState } from 'react'
import {
  Button,
  Flex,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from '@chakra-ui/react'
import { AiOutlineSearch, AiOutlineClose } from 'react-icons/ai'
import { IoFilterSharp } from 'react-icons/io5'

const Filters: React.FC<{ setIsFiltersOpen: (isOpen: boolean) => void }> = (
  props
) => {
  const [isFilterVisible, setIsFilterVisible] = useState(false)
  return (
    <Flex
      justifyContent="space-between"
      flexDirection="column"
      position="fixed"
      left="0"
      bottom="0"
      h={isFilterVisible ? '320px' : '60px'}
      w="100%"
      minW="300px"
      border="1px solid #D4D4D4"
      borderRadius="6px"
      bgColor="white"
    >
      <Flex flexDirection="row" justifyContent="space-between" h="60px">
        <Flex flexDirection="row" alignItems="center" m="auto 10px" h="30px">
          <Input
            placeholder="Wyszukaj"
            h="30px"
            w="200px"
            border="1px solid #D4D4D4"
          />
          <Icon h="6" w="6" ml="5px" as={AiOutlineSearch} />
        </Flex>
        <Flex m="auto 10px" lineHeight="20px">
          {isFilterVisible ? (
            <Icon
              h="6"
              w="6"
              mr="15px"
              as={AiOutlineClose}
              onClick={() => {
                setIsFilterVisible(false)
                props.setIsFiltersOpen(false)
              }}
            />
          ) : (
            <>
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
            </>
          )}
        </Flex>
      </Flex>
      {isFilterVisible && (
        <Flex
          flexDirection="column"
          h="260px"
          p="0 30px 0 10px"
          fontSize="16px"
        >
          <Text>Filtruj obiekty</Text>
          <Text m="7px 0" fontWeight="bold">
            Kategoria
          </Text>
          <Select fontSize="14px" h="32px">
            <option value="kategoria1">Kategoria 1</option>
            <option value="kategoria2">Kategoria 2</option>
            <option value="kategoria3">Kategoria 3</option>
          </Select>
          <Text m="7px 0" fontWeight="bold">
            Ilość sztuk
          </Text>
          <NumberInput
            borderColor="#E2E8F0"
            fontSize="14px"
            defaultValue={1}
            min={1}
          >
            <NumberInputField h="32px" />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Button
            h="32px"
            m="auto"
            mr="0"
            bgColor="#FF7700"
            color="white"
            fontSize="14px"
            fontWeight="600"
            lineHeight="32px"
          >
            Zapisz
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

export default Filters
