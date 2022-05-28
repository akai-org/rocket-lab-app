import {
  Flex,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
  Box,
  Heading,
} from '@chakra-ui/react'
import { useState } from 'react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import { BsSearch } from 'react-icons/bs'
import { listAddItem } from '../../../../utils/types/frontendGeneral'

const AddItem = () => {
  const [itemType, setItemType] = useState<listAddItem>()
  const [isTypeChosen, setIsTypeChosen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  return (
    <Flex
      flexDirection="column"
      borderRadius="6px"
      border="1px solid #C4C4C4"
      w="100%"
      fontSize="16px"
      alignItems="center"
      p="20px"
    >
      {!isTypeChosen ? (
        <>
          <Heading fontSize="24px" mb="10px" fontWeight="500" color="#2D3748">
            Dodaj do listy
          </Heading>
          <Flex mb="5px">
            <ProductButton
              onClick={() => {
                setItemType('existing')
                setIsTypeChosen(true)
              }}
              fontSize="16px"
              h="40px"
              w="150px"
            >
              Z magazynu
            </ProductButton>
            <ProductButton
              onClick={() => {
                setItemType('custom')
                setIsTypeChosen(true)
              }}
              fontSize="16px"
              ml="70px"
              h="40px"
              w="150px"
            >
              Dodatkowy
            </ProductButton>
          </Flex>
        </>
      ) : (
        <>
          {itemType === 'custom' ? (
            <>
              <Heading
                fontSize="24px"
                mb="10px"
                fontWeight="500"
                color="#2D3748"
              >
                Dodaj do listy przedmiot dodatkowy
              </Heading>
              <Flex w="100%" flexDirection="column">
                <Text fontWeight="500" mb="5px">
                  Nazwa
                </Text>
                <Input h="40px" borderColor="#D5D5D5" />
                <Text fontWeight="500" mb="5px" mt="10px">
                  Opis
                </Text>
                <Input h="40px" borderColor="#D5D5D5" />
                <Text fontWeight="500" mb="5px" mt="10px">
                  Ilość
                </Text>
                <NumberInput
                  allowMouseWheel
                  h="40px"
                  w="100%"
                  onChange={(e) => {
                    setQuantity(parseInt(e))
                  }}
                  borderColor="#D5D5D5"
                  defaultValue={1}
                  min={1}
                >
                  <NumberInputField
                    h="40px"
                    onChange={(event) => {
                      console.log(event)
                    }}
                  />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                {/* TODO: fetchowanie listy list */}
                <Text fontWeight="500" mb="5px" mt="10px">
                  Dodaj do listy
                </Text>
                <Select h="40px" borderColor="#D5D5D5">
                  <option value="list1">Lista 1</option>
                  <option value="list2">Lista 2</option>
                  <option value="list3">Lista 3</option>
                </Select>
                <Flex justifyContent="flex-end" mt="15px">
                  <ProductButton
                    onClick={() => {
                      setIsTypeChosen(false)
                    }}
                    fontSize="16px"
                    w="80px"
                  >
                    Dodaj
                  </ProductButton>
                  <ProductButton
                    onClick={() => {
                      setIsTypeChosen(false)
                    }}
                    fontSize="16px"
                    ml="10px"
                    w="80px"
                  >
                    Anuluj
                  </ProductButton>
                </Flex>
              </Flex>
            </>
          ) : (
            <>
              <Heading
                fontSize="24px"
                mb="10px"
                fontWeight="500"
                color="#2D3748"
              >
                Dodaj do listy przedmiot z magazynu
              </Heading>
              <Flex flexDirection="column" pt="8px" w="100%">
                <Text fontWeight="500" mb="5px">
                  Wyszukaj w magazynie
                </Text>
                <Flex>
                  {/* TODO: wychwytywanie na podstawie wpisanej wartości produktów z magazynu */}
                  <Box pt="4px">
                    <BsSearch size={25} />
                  </Box>
                  <Input h="40px" ml="10px" borderColor="#D5D5D5" />
                </Flex>
                <Text mt="10px" mb="5px" fontWeight="500">
                  Dodaj do listy
                </Text>
                {/* TODO: fetchowanie listy list */}
                <Select h="40px" borderColor="#D5D5D5">
                  <option value="list1">Lista 1</option>
                  <option value="list2">Lista 2</option>
                  <option value="list3">Lista 3</option>
                </Select>
                <Flex justifyContent="flex-end" mt="15px">
                  <ProductButton
                    onClick={() => {
                      setIsTypeChosen(false)
                    }}
                    fontSize="16px"
                    w="80px"
                  >
                    Dodaj
                  </ProductButton>
                  <ProductButton
                    onClick={() => {
                      setIsTypeChosen(false)
                    }}
                    fontSize="16px"
                    ml="10px"
                    w="80px"
                  >
                    Anuluj
                  </ProductButton>
                </Flex>
              </Flex>
            </>
          )}
        </>
      )}
    </Flex>
  )
}

export default AddItem
