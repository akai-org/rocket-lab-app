import React, { useContext } from 'react'
import {
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
import { TmpSchemaItem } from '../../../../../../../mongo/models/schema'
import { SchemasContext } from '../../../../../../../pages/schemes'
import { useColors } from '../../../../../../../theme/useColors'

interface ItemProps {
  item: TmpSchemaItem
}

const Item = ({ item: schemaItem }: ItemProps) => {
  const context = useContext(SchemasContext)
  const colors = useColors()

  const handleDelete = () => {
    context?.removeItem(schemaItem)
  }
  return (
    <Tr fontSize="xs" h="40px">
      <Td>
        <Flex justifyContent="flex-start" cursor="pointer">
          <Image src="item.png" w="40px" h="40px" alt={schemaItem.item.name} />
          <Text lineHeight="40px" noOfLines={1} ml="10px">
            {schemaItem.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <NumberInput
          allowMouseWheel
          display="inline"
          h="30px"
          fontSize="sm"
          defaultValue={schemaItem.neededQuantity}
          onChange={(e) =>
            context?.updateItem({ ...schemaItem, neededQuantity: +e })
          }
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
            color={colors.fontSecondary}
          />
        </Flex>
      </Td>
    </Tr>
  )
}

export default Item
