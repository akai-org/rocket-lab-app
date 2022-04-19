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

const ListItem = () => {
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
          <NumberInput h="32px" borderColor="#E2E8F0" defaultValue={1} min={1}>
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

export default ListItem