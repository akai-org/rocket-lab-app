import { useContext, memo } from 'react'
import {
  Flex,
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
import { TmpSchemaItem } from 'mongo'
import { SchemasContext } from 'pages/schemes'
import { useColors } from 'ui/theme'

interface ItemProps {
  schemaItem: TmpSchemaItem
}

export const Item = memo(({ schemaItem }: ItemProps) => {
  const context = useContext(SchemasContext)
  const colors = useColors()

  const handleDelete = () => {
    context?.removeItem(schemaItem)
  }
  return (
    <Tr fontSize="xs" color={colors.fontSecondary} h="40px">
      <Td>
        <Flex justifyContent="flex-start" cursor="pointer">
          <Text lineHeight="40px" noOfLines={1} ml="10px">
            {schemaItem.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <NumberInput
          borderColor={colors.borderSecondary}
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
          <NumberInputField px="5px" h="30px" />
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
})
