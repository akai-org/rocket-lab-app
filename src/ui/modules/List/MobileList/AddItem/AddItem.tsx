import {
  Input,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Stack,
  Select,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { ProductButton } from 'ui/components'
import { useColors } from 'ui/theme'
import React, { memo } from 'react'

export type item = 'custom' | 'existing'

export const AddItem = memo(() => {
  const name = useRef<HTMLInputElement>(null)
  const [nameIsValid, setNameIsValid] = useState(true)
  const [quantity, setQuantity] = useState(1)
  const colors = useColors()

  const submitForm = () => {
    if (name.current!.value) setNameIsValid(true)
    else setNameIsValid(false)
  }

  return (
    <Accordion
      w="95%"
      m="0px auto 10px auto"
      borderRadius="6px"
      border="1px solid #C4C4C4"
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            noOfLines={1}
            fontSize="md"
            fontWeight="normal"
            textAlign="left"
            color={colors.fontSecondary}
          >
            Przedmiot spoza magazynu
          </Text>
          <AccordionIcon color={colors.fontSecondary} />
        </AccordionButton>
        <AccordionPanel color={colors.fontSecondary}>
          <Text fontWeight="normal">Nazwa</Text>
          <Input
            borderColor={colors.borderSecondary}
            ref={name}
            h="32px"
            id="name"
            type="text"
          />
          {!nameIsValid && (
            <Text fontSize="xs" color={colors.errorPrimary}>
              Wprowadź nazwę
            </Text>
          )}
          <Text fontWeight="normal" mt="5px">
            Opis
          </Text>
          <Input
            borderColor={colors.borderSecondary}
            h="32px"
            id="description"
            type="text"
          />
          <Text fontWeight="normal" mt="5px">
            Ilość
          </Text>
          <NumberInput
            borderColor={colors.borderSecondary}
            allowMouseWheel
            h="32px"
            w="100%"
            onChange={(e) => {
              setQuantity(parseInt(e))
            }}
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
          <Text fontWeight="normal" mt="5px">
            Lista
          </Text>
          <Select borderColor={colors.borderSecondary} h="32px">
            <option>Lista 1</option>
            <option>Lista 2</option>
            <option>Lista 3</option>
          </Select>
          <Stack>
            <ProductButton
              ml="auto"
              onClick={submitForm}
              fontSize="sm"
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
})
