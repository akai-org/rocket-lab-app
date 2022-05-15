import {
  Flex,
  Image,
  Td,
  Text,
  Tr,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
  ButtonGroup,
} from '@chakra-ui/react'
import React, { useState } from 'react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'

const ListItem = () => {
  const [quantity, setQuantity] = useState(50)
  const [isEdit, setIsEdit] = useState(false)
  return (
    <Tr fontSize="14px" h="40px">
      <Td>
        <Flex justifyContent="flex-start">
          <Image src="item.png" w="40px" h="40px" />
          <Text lineHeight="40px" ml="10px">
            Harnaś
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text>To król gór</Text>
      </Td>
      <Td textAlign="right">
        <Text color={quantity ? 'inherit' : 'red.500'}>
          {quantity ? quantity : 'brak w magazynie'}
        </Text>
      </Td>
      <Td>
        <Flex w="100%" justifyContent="flex-end">
          {isEdit ? (
            <>
              <Flex mt="10px" flexDirection="column">
                <NumberInput
                  mb="8px"
                  h="32px"
                  w="120px"
                  borderColor="#E2E8F0"
                  defaultValue={1}
                  min={1}
                >
                  <NumberInputField h="32px" />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
                <ButtonGroup isAttached w="120px" mb="8px">
                  <ProductButton
                    size="sm"
                    pb="5px"
                    w="60px"
                    onClick={() => {
                      setIsEdit(false)
                    }}
                  >
                    +
                  </ProductButton>
                  <ProductButton
                    size="sm"
                    w="60px"
                    pb="5px"
                    onClick={() => {
                      setIsEdit(false)
                    }}
                  >
                    -
                  </ProductButton>
                </ButtonGroup>
                <ProductButton
                  size="sm"
                  w="120px"
                  mb="8px"
                  fontSize="16px"
                  onClick={() => {
                    setIsEdit(false)
                  }}
                >
                  Usuń z listy
                </ProductButton>
                <ProductButton
                  size="sm"
                  w="120px"
                  fontSize="16px"
                  onClick={() => {
                    setIsEdit(false)
                  }}
                >
                  Anuluj
                </ProductButton>
              </Flex>
            </>
          ) : (
            <>
              <ProductButton
                size="sm"
                w="120px"
                fontSize="16px"
                onClick={() => {
                  setIsEdit(true)
                }}
              >
                Edytuj
              </ProductButton>
            </>
          )}
        </Flex>
      </Td>
    </Tr>
  )
}

export default ListItem
