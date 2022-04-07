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
      <Flex w="50%" flexDirection="column" mt="10px">
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
              borderColor="#E2E8F0"
              defaultValue={1}
              w="84px"
              min={1}
              h="32px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              bgColor="#FF7700"
              color="white"
              w="29px"
              minH="29px"
              borderRadius="6px"
              fontWeight="400"
              fontSize="35px"
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
        <Image src="/item.png" w="100px" h="100" m="auto" />
        <Box w="70%" m="0 auto" p="20px" h="100%">
          <Text fontSize="16px" fontWeight="500">
            Sprzedam Opla
          </Text>
          <Text fontSize="12px" color="#878585">
            Sprzedam open vectra stan bdb nie gruz
          </Text>
          <Flex flexDirection="row" mt="20px" justifyContent="space-around">
            <NumberInput
              borderColor="#E2E8F0"
              defaultValue={1}
              min={1}
              h="32px"
            >
              <NumberInputField />
              <NumberInputStepper>
                <NumberIncrementStepper />
                <NumberDecrementStepper />
              </NumberInputStepper>
            </NumberInput>
            <Button
              bgColor="#FF7700"
              color="white"
              w="29px"
              minH="29px"
              borderRadius="6px"
              fontWeight="400"
              fontSize="35px"
              ml="20px"
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
