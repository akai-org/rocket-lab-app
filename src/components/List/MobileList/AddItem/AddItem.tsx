import {
  Flex,
  Heading,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import { BsSearch } from 'react-icons/bs'
import { listAddItem } from '../../../../utils/types/frontendGeneral'

export type item = 'custom' | 'existing'

const AddItem = () => {
  const [itemType, setItemType] = useState<listAddItem>()
  const [isTypeChosen, setIsTypeChosen] = useState(false)
  const [quantity, setQuantity] = useState(1)
  return (
    <Flex
      flexDirection="column"
      border="1px solid #D4D4D4"
      borderRadius="5px"
      m="10px auto"
      w="95%"
      p="10px"
      alignItems="center"
    >
      <Heading fontSize="18px" fontWeight="300" mb="5px">
        Dodaj do listy
      </Heading>
      {!isTypeChosen ? (
        <>
          <Flex mb="5px">
            <ProductButton
              onClick={() => {
                setItemType('existing')
                setIsTypeChosen(true)
              }}
              fontSize="16px"
              h="30px"
              w="130px"
            >
              Z magazynu
            </ProductButton>
            <ProductButton
              onClick={() => {
                setItemType('custom')
                setIsTypeChosen(true)
              }}
              fontSize="16px"
              ml="10px"
              h="30px"
              w="130px"
            >
              Dodatkowy
            </ProductButton>
          </Flex>
        </>
      ) : (
        <>
          {itemType === 'custom' ? (
            <Flex w="100%" flexDirection="column">
              <Text>Nazwa</Text>
              <Input h="32px" borderColor="#D5D5D5" />
              <Text mt="10px">Opis</Text>
              <Input h="32px" borderColor="#D5D5D5" />
              <Text mt="10px">Ilość</Text>
              <NumberInput
                allowMouseWheel
                h="32px"
                w="100%"
                onChange={(e) => {
                  setQuantity(parseInt(e))
                }}
                borderColor="#D5D5D5"
                defaultValue={1}
                min={1}
              >
                <NumberInputField
                  h="32px"
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
              <Text mt="10px">Dodaj do listy</Text>
              <Select h="32px" borderColor="#D5D5D5">
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
                  h="30px"
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
                  h="30px"
                  w="80px"
                >
                  Anuluj
                </ProductButton>
              </Flex>
            </Flex>
          ) : (
            <Flex flexDirection="column" pt="8px" w="100%">
              <Flex>
                {/* TODO: wychwytywanie na podstawie wpisanej wartości produktów z magazynu */}
                <BsSearch size={25} />
                <Input h="32px" ml="5px" borderColor="#D5D5D5" />
              </Flex>
              <Text mt="10px">Dodaj do listy</Text>
              {/* TODO: fetchowanie listy list */}
              <Select h="32px" borderColor="#D5D5D5">
                <option value="list1">Lista 1</option>
                <option value="list2">Lista 2</option>
                <option value="list3">Lista 3</option>
              </Select>
              <Flex justifyContent="flex-end" mt="10px">
                <ProductButton
                  onClick={() => {
                    setIsTypeChosen(false)
                  }}
                  fontSize="16px"
                  h="30px"
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
                  h="30px"
                  w="80px"
                >
                  Anuluj
                </ProductButton>
              </Flex>
            </Flex>
          )}
        </>
      )}
    </Flex>
  )
}

export default AddItem
