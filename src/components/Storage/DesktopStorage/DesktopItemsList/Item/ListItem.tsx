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
import { useState } from 'react'
import { Item } from '../../../../../mongo/models/item'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'

interface Props {
  item: Item
}

const ListItem = ({ item }: Props) => {
  const [quantity, setQuantity] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  return (
    <Tr fontSize="14px" h="40px">
      <Td>
        <Flex justifyContent="flex-start">
          <Image src={item.imageUrl} w="40px" h="40px" />
          <Text lineHeight="40px" ml="10px">
            {item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text>
          {item.description.length > 40
            ? item.description.substring(0, 40) + '...'
            : item.description}
        </Text>
      </Td>
      <Td textAlign="right">
        <Text color={quantity ? 'inherit' : 'red.500'}>
          {quantity ? quantity : 'brak w magazynie'}
        </Text>
      </Td>
      <Td>
        {quantity ? (
          <Flex flexDirection="row" justifyContent="flex-end">
            <NumberInput
              h="32px"
              w="84px"
              borderColor="#E2E8F0"
              defaultValue={1}
              min={1}
              mr="10px"
            >
              <NumberInputField h="32px" />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              w="27px"
              pb="5px"
              size="sm"
              borderRadius="6px"
              fontWeight="400"
              fontSize="30px"
              bgColor="#FF7700"
              color="white"
            >
              +
            </Button>
          </Flex>
        ) : (
          <Flex justifyContent="flex-end">
            {!isEdit ? (
              <ProductButton
                device="desktop"
                w="80px"
                onClick={() => {
                  setIsEdit(true)
                }}
                fontSize="16px"
                mx="5px"
              >
                Edytuj
              </ProductButton>
            ) : (
              <>
                <NumberInput
                  h="32px"
                  w="84px"
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
                <ButtonGroup isAttached mx="5px">
                  <ProductButton
                    device="desktop"
                    size="sm"
                    pb="5px"
                    onClick={() => {
                      setIsEdit(false)
                    }}
                  >
                    +
                  </ProductButton>
                  <ProductButton
                    device="desktop"
                    size="sm"
                    pb="5px"
                    onClick={() => {
                      setIsEdit(false)
                    }}
                  >
                    -
                  </ProductButton>
                </ButtonGroup>
              </>
            )}
            <ProductButton
              device="desktop"
              w="120px"
              onClick={() => {}}
              fontSize="16px"
            >
              Dodaj do listy
            </ProductButton>
          </Flex>
        )}
      </Td>
    </Tr>
  )
}

export default ListItem
