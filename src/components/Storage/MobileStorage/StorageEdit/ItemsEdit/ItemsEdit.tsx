import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  FormControl,
  FormLabel,
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
            fontSize="16px"
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
          <FormControl fontSize="14px">
            <FormLabel htmlFor="name" fontSize="14px">
              Nazwa
            </FormLabel>
            <Input ref={name} h="32px" id="name" type="text" fontSize="14px" />
            {!nameIsValid && (
              <Text fontSize="12px" color="red">
                Wprowadź nazwę
              </Text>
            )}
            <FormLabel htmlFor="description" fontSize="14px">
              Opis
            </FormLabel>
            <Input
              h="32px"
              fontSize="14px"
              id="description"
              ref={description}
              type="text"
            />
            <FormLabel htmlFor="amount" fontSize="14px">
              Ilość
            </FormLabel>
            <NumberInput
              allowMouseWheel
              h="32px"
              min={1}
              id="amount"
              defaultValue={15}
            >
              <NumberInputField ref={amount} h="32px" fontSize="14px" />
              <NumberInputStepper>
                <NumberIncrementStepper h="32px" />
                <NumberDecrementStepper h="32px" />
              </NumberInputStepper>
            </NumberInput>
            <FormLabel htmlFor="photo" fontSize="14px">
              Zdjęcie
            </FormLabel>
            <ProductButton
              id="photo"
              disabled
              fontSize="14px"
              h="25px"
              w="80px"
            >
              Wgraj
            </ProductButton>
            <FormLabel htmlFor="categories" fontSize="14px">
              Kategorie
            </FormLabel>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
              colorScheme="orange"
            >
              <Flex flexDirection="column" pl="20px" fontSize="14px">
                <Checkbox value="category1">
                  <Text fontSize="14px">Kategoria 1</Text>
                </Checkbox>
                <Checkbox value="category2">
                  <Text fontSize="14px">Kategoria 2</Text>
                </Checkbox>
                <Checkbox value="category3">
                  <Text fontSize="14px">Kategoria 3</Text>
                </Checkbox>
                <Checkbox value="category4">
                  <Text fontSize="14px">Kategoria 4</Text>
                </Checkbox>
                <Checkbox value="category5">
                  <Text fontSize="14px">Kategoria 5</Text>
                </Checkbox>
                <Checkbox value="category6">
                  <Text fontSize="14px">Kategoria 6</Text>
                </Checkbox>
                <Checkbox value="category7">
                  <Text fontSize="14px">Kategoria 7</Text>
                </Checkbox>
              </Flex>
            </CheckboxGroup>
            <Flex justifyContent="flex-end">
              <ProductButton
                onClick={submitForm}
                fontSize="16px"
                h="25px"
                w="80px"
              >
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
