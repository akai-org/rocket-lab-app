import React, { FC, useState } from 'react'
import {
  Box,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Td,
  Text,
  Tr,
} from '@chakra-ui/react'
import { AiOutlineClose } from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { removeItem } from '../../../../../../store/Slices/schemeSlice'
import { PopulatedItem } from '../../../../../../mongo/models/item'

interface ItemProps {
  item: PopulatedItem
  key: string
}

const Item = ({ item, key }: ItemProps) => {
  const dispatch = useDispatch()
  const [quantity, setQuantity] = useState(item.quantity)

  const handleDelete = () => {
    dispatch(removeItem(item))
  }
  return (
    <Tr fontSize="14px" h="40px" key={key}>
      <Td>
        <Flex justifyContent="flex-start" cursor="pointer">
          <Image src="item.png" w="40px" h="40px" />
          <Text lineHeight="40px" noOfLines={1} ml="10px">
            {item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <NumberInput
          allowMouseWheel
          display="inline"
          h="30px"
          fontSize="16px"
          borderColor="#E2E8F0"
          defaultValue={quantity}
          onChange={(e) => setQuantity(+e)}
          min={1}
        >
          <NumberInputField h="30px" />
          <NumberInputStepper h="30px">
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Td>
      <Td>
        <Flex justifyContent="flex-end">
          <AiOutlineClose
            cursor="pointer"
            display="block"
            onClick={handleDelete}
          />
        </Flex>
      </Td>
    </Tr>
  )
}

export default Item
