import React from 'react'
import {
  Box,
  Button,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'

const Item: React.FC<{ listType: string }> = (props) => {
  if (props.listType === 'grid') {
    return (
      <Flex flexDirection="column" w="50%" mt="10px">
        <Image src="/item.png" w="80%" m="5px auto" />
        <Box textAlign="center" w="70%" m="0 auto">
          <Text fontSize="16px" fontWeight="500">
            Sprzedam Opla
          </Text>
          <Text fontSize="12px" color="#878585">
            Sprzedam open vectra stan bdb nie gruz
          </Text>
          <Flex flexDirection="row" justifyContent="space-around">
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
            <Button
              w="32px"
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
        </Box>
      </Flex>
    )
  } else {
    return (
      <Flex w="95%" m="0 auto" borderBottom="2px solid #D5D5D5">
        <Image src="/item.png" h="100" w="100px" m="auto" />
        <Box h="100%" w="70%" m="0 auto" p="20px">
          <Text fontSize="16px" fontWeight="500">
            Sprzedam Opla
          </Text>
          <Text fontSize="12px" color="#878585">
            Sprzedam open vectra stan bdb nie gruz
          </Text>
          <Flex flexDirection="row" justifyContent="space-around" mt="20px">
            <NumberInput
              h="32px"
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
            <Button
              w="32px"
              size="sm"
              ml="20px"
              pb="5px"
              borderRadius="6px"
              bgColor="#FF7700"
              color="white"
              fontWeight="400"
              fontSize="30px"
            >
              +
            </Button>
          </Flex>
        </Box>
      </Flex>
    )
  }
}

export default Item
