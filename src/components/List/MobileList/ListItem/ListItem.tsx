import {
  Box,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'

const ListItem = () => {
  const [isEdit, setIsEdit] = useState(false)
  const [quantity, setQuantity] = useState(58)
  return (
    <Flex w="100%" m="0 auto" borderBottom="2px solid #D5D5D5">
      <Flex ml=" 10px" my="auto">
        <Image
          src={'/item.png'}
          minH="100px"
          minW="100px"
          w="100px"
          h="100px"
        />
      </Flex>
      <Box h="100%" w="80%" m="0 auto 0 0" textAlign="left" p="20px">
        <Text fontSize="16px" fontWeight="500">
          {'Przykładowy element'}
        </Text>
        <Text fontSize="12px" color="#878585">
          Lorem ipsum dolor sit, amet asd as
        </Text>
        {isEdit ? (
          <>
            <Flex>
              <Text fontSize="14px" fontWeight="500">
                Ilość
              </Text>
              <NumberInput
                ml="10px"
                h="25px"
                w="70px"
                onChange={(e) => {
                  setQuantity(parseInt(e))
                }}
                borderColor="#E2E8F0"
                defaultValue={1}
                min={1}
              >
                <NumberInputField
                  h="25px"
                  onChange={(event) => {
                    console.log(event)
                  }}
                />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Flex mt="10px">
              <ProductButton
                size="sm"
                w="120px"
                fontSize="16px"
                onClick={() => {
                  setIsEdit(false)
                }}
              >
                Usuń z listy
              </ProductButton>
              <ProductButton
                size="sm"
                w="70px"
                ml="5px"
                fontSize="16px"
                onClick={() => {
                  setIsEdit(false)
                }}
              >
                Ustaw
              </ProductButton>
              <Box
                ml="5px"
                onClick={() => {
                  setIsEdit(!isEdit)
                }}
              >
                <IoIosArrowUp size="30px" />
              </Box>
            </Flex>
          </>
        ) : (
          <>
            <Text fontSize="14px" fontWeight="500">
              Ilość: {quantity}
            </Text>
            <ProductButton
              size="sm"
              w="70px"
              fontSize="16px"
              onClick={() => {
                setIsEdit(true)
              }}
            >
              Edytuj
            </ProductButton>
          </>
        )}
      </Box>
    </Flex>
  )
}

export default ListItem
