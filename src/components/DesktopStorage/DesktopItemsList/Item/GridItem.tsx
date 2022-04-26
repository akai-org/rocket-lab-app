import {
  Flex,
  Image,
  Text,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Button,
} from '@chakra-ui/react'
import { ItemProps } from '../../../../utils/types/ItemProps'

interface Props {
  item: ItemProps
}

const GridItem = ({ item }: Props) => {
  return (
    <Flex flexDirection="column" maxW="190px" m="10px auto 0 auto">
      <Image src={item.imageUrl} w="154px" m="5px auto" />
      <Box textAlign="center" w="70%" m="0 auto">
        <Text fontSize="16px" fontWeight="400">
          {item.name}
        </Text>
        <Text fontSize="12px" color="#878585">
          {item.description}
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
            size="sm"
            borderRadius="6px"
            fontWeight="400"
            fontSize="30px"
            color="white"
            bgColor="#FF7700"
          >
            +
          </Button>
        </Flex>
      </Box>
    </Flex>
  )
}

export default GridItem
