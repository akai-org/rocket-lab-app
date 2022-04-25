import {
  Button,
  Flex,
  Icon,
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Select,
  Text,
} from '@chakra-ui/react'
import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

const Filters = () => {
  return (
    <Flex
      flexDirection="column"
      p="20px"
      borderRadius="6px"
      border="1px solid #C4C4C4"
    >
      <Text fontSize="24px" fontWeight="500" color="#2D3748">
        Wyszukaj części w magazynie
      </Text>
      <Flex
        flexDirection="row"
        justifyContent="space-between"
        mt="15px"
        fontSize="16px"
        fontWeight="500"
        color="#2D3748"
      >
        <Flex flexDirection="column" w="30%">
          <Text>Nazwa</Text>
          <Flex>
            <Input
              h="40px"
              border="1px solid #D4D4D4"
              fontWeight="400"
              placeholder="Nazwa Produktu"
            />
            <Icon ml="10px" fontSize="30px" as={AiOutlineSearch} />
          </Flex>
        </Flex>
        <Flex flexDirection="column" w="30%">
          <Text>Kategoria</Text>
          <Select h="40px" border="1px solid #D4D4D4" fontWeight="400">
            <option value="materialyEksploatacyjne">
              Materiały eksploatacyjne
            </option>
            <option value="narzedzia">Narzędzia</option>
            <option value="kolejnaKategoria">Kolejna kategoria</option>
          </Select>
        </Flex>
        <Flex flexDirection="column" w="30%">
          <Text>Ilość sztuk</Text>
          <NumberInput fontWeight="400" defaultValue={1} min={1}>
            <NumberInputField h="40px" border="1px solid #D4D4D4" />
            <NumberInputStepper h="40px">
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
        </Flex>
      </Flex>
      <Flex justifyContent="flex-end" p="25px 0 5px 0">
        <Button w="120px" h="40px" bgColor="#FF7700" color="white">
          Zapisz
        </Button>
      </Flex>
    </Flex>
  )
}

export default Filters
