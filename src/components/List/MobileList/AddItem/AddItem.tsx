import {
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  Select,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'

export type item = 'custom' | 'existing'

const AddItem = () => {
  const name = useRef<HTMLInputElement>(null)
  const [nameIsValid, setNameIsValid] = useState(true)
  const [quantity, setQuantity] = useState(1)

  const submitForm = () => {
    if (name.current!.value) setNameIsValid(true)
    else setNameIsValid(false)
  }

  return (
    <Accordion
      w="95%"
      m="10px auto"
      borderRadius="6px"
      border="1px solid #C4C4C4"
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            noOfLines={1}
            fontSize="20px"
            fontWeight="600"
            color="#4A5568"
            textAlign="left"
          >
            Przedmiot spoza magazynu
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontWeight={500}>Nazwa</Text>
          <Input ref={name} h="32px" id="name" type="text" />
          {!nameIsValid && (
            <Text fontSize="14px" color="red">
              Wprowadź nazwę
            </Text>
          )}
          <Text fontWeight={500} mt="5px">
            Opis
          </Text>
          <Input h="32px" id="description" type="text" />
          <Text fontWeight={500} mt="5px">
            Ilość
          </Text>
          <NumberInput
            allowMouseWheel
            h="32px"
            w="100%"
            onChange={(e) => {
              setQuantity(parseInt(e))
            }}
            borderColor="#D5D5D5"
            defaultValue={1}
            min={1}
          >
            <NumberInputField
              h="32px"
              onChange={(event) => {
                console.log(event)
              }}
            />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput>
          <Text fontWeight={500} mt="5px">
            Lista
          </Text>
          <Select h="32px">
            <option>Lista 1</option>
            <option>Lista 2</option>
            <option>Lista 3</option>
          </Select>
          <Stack>
            <ProductButton
              ml="auto"
              onClick={submitForm}
              fontSize="16px"
              w="90px"
              mt="15px"
            >
              Dodaj
            </ProductButton>
          </Stack>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddItem
