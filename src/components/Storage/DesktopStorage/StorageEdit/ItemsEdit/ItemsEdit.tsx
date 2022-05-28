import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  Flex,
  Checkbox,
  CheckboxGroup,
  Text,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'

const ItemsEdit = () => {
  const [nameIsValid, setNameIsValid] = useState(true)
  const name = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)
  const amount = useRef<HTMLInputElement>(null)
  const [checkboxes, setCheckboxes] = useState([''])

  const submitForm = () => {
    if (name.current!.value) {
      setNameIsValid(true)
      const data = {
        name: name.current!.value,
        description: description ? description.current!.value : '',
        amount: amount.current!.value,
        categories: checkboxes,
        date: new Date(),
      }
    } else {
      setNameIsValid(false)
    }
  }

  return (
    <Accordion allowMultiple>
      <AccordionItem border="none">
        <AccordionButton>
          <Box
            flex="1"
            fontSize="18px"
            fontWeight="500"
            color="#2D3748"
            textAlign="left"
            h="20px"
          >
            Dodanie części
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <FormControl fontSize="16px">
            <FormLabel htmlFor="name">Nazwa</FormLabel>
            <Input ref={name} h="32px" id="name" type="text" />
            {!nameIsValid && (
              <Text fontSize="14px" color="red">
                Wprowadź nazwę
              </Text>
            )}
            <FormLabel htmlFor="description">Opis</FormLabel>
            <Input h="32px" id="description" ref={description} type="text" />
            <FormLabel htmlFor="amount">Ilość</FormLabel>
            <NumberInput
              allowMouseWheel
              h="32px"
              min={1}
              id="amount"
              defaultValue={15}
            >
              <NumberInputField ref={amount} h="32px" />
              <NumberInputStepper>
                <NumberIncrementStepper h="32px" />
                <NumberDecrementStepper h="32px" />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel htmlFor="photo">Zdjęcie</FormLabel>
            <ProductButton id="photo" disabled fontSize="16px" w="100px">
              Wgraj
            </ProductButton>
            <FormLabel htmlFor="categories">Kategorie</FormLabel>
            <CheckboxGroup
              onChange={(e) =>
                setCheckboxes(e.map((el) => el.toString()))
              }
              colorScheme="orange"
            >
              <Flex flexDirection="column" pl="20px">
                <Checkbox value="category1">Kategoria 1</Checkbox>
                <Checkbox value="category2">Kategoria 2</Checkbox>
                <Checkbox value="category3">Kategoria 3</Checkbox>
                <Checkbox value="category4">Kategoria 4</Checkbox>
                <Checkbox value="category5">Kategoria 5</Checkbox>
                <Checkbox value="category6">Kategoria 6</Checkbox>
                <Checkbox value="category7">Kategoria 7</Checkbox>
              </Flex>
            </CheckboxGroup>
            <Flex justifyContent="flex-end">
              <ProductButton onClick={submitForm} fontSize="16px" w="100px">
                Dodaj
              </ProductButton>
            </Flex>
          </FormControl>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default ItemsEdit
