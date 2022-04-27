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
} from '@chakra-ui/react'
import { useState } from 'react'
import { ItemProps } from '../../../../utils/types/frontendGeneral'

interface Props {
  item: ItemProps
}

const ListItem = ({ item }: Props) => {
  const [quantity, setQuantity] = useState(0)
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
        <Text>{item.description}</Text>
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
            <Button
              h="32px"
              w="120px"
              borderRadius="6px"
              fontWeight="600"
              fontSize="14px"
              color="white"
              bgColor="#FF7700"
            >
              Dodaj do listy
            </Button>
          </Flex>
        )}
      </Td>
    </Tr>
  )
}

export default ListItem
