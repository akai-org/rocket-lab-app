import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
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
  Divider,
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
        <AccordionPanel borderLeft="1px solid #C4C4C4">
          <FormControl fontSize="16px">
            <Text fontWeight={500}>Nazwa</Text>
            <Input ref={name} h="32px" id="name" type="text" />
            {!nameIsValid && (
              <Text fontSize="14px" color="red">
                Wprowadź nazwę
              </Text>
            )}
            <Text mt="5px" fontWeight={500}>
              Opis
            </Text>
            <Input h="32px" id="description" ref={description} type="text" />
            <Text mt="5px" fontWeight={500}>
              Ilość
            </Text>
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
            <Text mt="5px" fontWeight={500}>
              Obraz
            </Text>
            <ProductButton id="photo" disabled fontSize="16px" w="100px">
              Wgraj
            </ProductButton>
            <Text mt="5px" fontWeight={500}>
              Kategorie
            </Text>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
              colorScheme="orange"
            >
              <Flex flexDirection="column">
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
