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

const ListItem: React.FC<{
  quantity: number
  description: string
  name: string
  url: string
}> = (props) => {
  return (
    <Tr fontSize="14px" h="40px">
      <Td>
        <Flex justifyContent="flex-start">
          <Image src={props.url} w="40px" h="40px" />
          <Text lineHeight="40px" ml="10px">
            {props.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text>{props.description}</Text>
      </Td>
      <Td textAlign="right">
        <Text color={props.quantity ? 'inherit' : 'red.500'}>
          {props.quantity ? props.quantity : 'brak w magazynie'}
        </Text>
      </Td>
      <Td>
        {props.quantity ? (
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
              bgColor="#FF7700"
              color="white"
              borderRadius="6px"
              fontWeight="400"
              fontSize="30px"
            >
              +
            </Button>
          </Flex>
        ) : (
          <Flex justifyContent="flex-end">
            <Button
              h="32px"
              w="120px"
              bgColor="#FF7700"
              color="white"
              borderRadius="6px"
              fontWeight="600"
              fontSize="14px"
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
