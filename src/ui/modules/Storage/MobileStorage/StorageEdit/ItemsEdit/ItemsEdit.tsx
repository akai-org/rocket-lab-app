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
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { categoriesInfo } from 'store'
import { API_URL } from 'utils/constants'
import { fetcher } from 'utils/requests'
import { ProductButton } from 'ui/components'
import { useColors } from 'ui/theme'
import React, { memo } from 'react'

export const ItemsEdit = memo(() => {
  const router = useRouter()
  const colors = useColors()
  const categories = useSelector(categoriesInfo).categories
  const [nameIsValid, setNameIsValid] = useState(true)
  const name = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)
  const quantity = useRef<HTMLInputElement>(null)
  const [checkboxes, setCheckboxes] = useState([''])

  const submitForm = async () => {
    if (name.current!.value) {
      setNameIsValid(true)
      await onAddItem()
    } else {
      setNameIsValid(false)
    }
  }

  const onAddItem = async () => {
    try {
      const createdItem = await fetcher(API_URL + '/api/items/add', {
        method: 'POST',
        body: {
          name: name.current!.value,
          description: description ? description.current!.value : '',
          quantity: quantity.current!.value,
          categories: checkboxes,
          imageUrl: '/item.png',
        },
      })

      router.reload()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Accordion allowMultiple>
      <AccordionItem border="none">
        <AccordionButton>
          <Box
            flex="1"
            fontSize="sm"
            fontWeight="normal"
            color={colors.fontSecondary}
            textAlign="left"
            h="25px"
          >
            Dodanie części
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <FormControl color={colors.fontSecondary} fontSize="xs">
            <Text fontWeight="normal" fontSize="xs">
              Nazwa
            </Text>
            <Input
              borderColor={colors.borderSecondary}
              ref={name}
              h="32px"
              id="name"
              type="text"
              fontSize="xs"
            />
            {!nameIsValid && (
              <Text fontSize="xxs" color={colors.errorPrimary}>
                Wprowadź nazwę
              </Text>
            )}
            <Text fontWeight="normal" mt="5px" fontSize="xs">
              Opis
            </Text>
            <Input
              borderColor={colors.borderSecondary}
              h="32px"
              fontSize="xs"
              id="description"
              ref={description}
              type="text"
            />
            <Text fontWeight="normal" mt="5px" fontSize="xs">
              Ilość
            </Text>
            <NumberInput
              allowMouseWheel
              borderColor={colors.borderSecondary}
              h="32px"
              min={1}
              id="amount"
              defaultValue={1}
            >
              <NumberInputField ref={quantity} h="32px" fontSize="xs" />
              <NumberInputStepper>
                <NumberIncrementStepper h="32px" />
                <NumberDecrementStepper h="32px" />
              </NumberInputStepper>
            </NumberInput>
            <Text fontWeight="normal" mt="5px" fontSize="xs">
              Obraz
            </Text>
            <ProductButton id="photo" disabled fontSize="xs" h="25px" w="80px">
              Wgraj
            </ProductButton>
            <Text fontWeight="normal" mt="5px" fontSize="xs">
              Kategorie
            </Text>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
              colorScheme="orange"
            >
              <Flex flexDirection="column" fontSize="xs">
                {categories.map((category) => (
                  <Checkbox value={category.id} key={category.id}>
                    <Text fontSize="xs">{category.name}</Text>
                  </Checkbox>
                ))}
              </Flex>
            </CheckboxGroup>
            <Flex justifyContent="flex-end">
              <ProductButton
                onClick={submitForm}
                fontSize="sm"
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
})
