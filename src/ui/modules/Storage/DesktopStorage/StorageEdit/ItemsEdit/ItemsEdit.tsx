import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
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
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem, categoriesInfo } from 'store'
import { API_URL } from 'utils/constants'
import { fetcher } from 'utils/requests'
import { ProductButton } from 'ui/components'
import { useColors } from 'ui/theme'

export const ItemsEdit = () => {
  const dispatch = useDispatch()
  const categories = useSelector(categoriesInfo).categories
  const colors = useColors()
  const [nameIsValid, setNameIsValid] = useState(true)
  const name = useRef<HTMLInputElement>(null)
  const description = useRef<HTMLInputElement>(null)
  const quantity = useRef<HTMLInputElement>(null)
  const [checkboxes, setCheckboxes] = useState([''])

  // FIXME: Not a form handler - misleading name
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

      console.log({ createdItem })

      dispatch(addItem(createdItem))
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Accordion allowMultiple>
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            fontSize="md"
            fontWeight="normal"
            color={colors.fontSecondary}
            textAlign="left"
            h="30px"
          >
            Dodanie części
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel borderLeft={`1px solid ${colors.borderPrimary}`}>
          <FormControl fontSize="sm" color={colors.fontSecondary}>
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
            <Text mt="5px" fontWeight="normal">
              Opis
            </Text>
            <Input
              borderColor={colors.borderSecondary}
              h="32px"
              id="description"
              ref={description}
              type="text"
            />
            <Text mt="5px" fontWeight="normal">
              Ilość
            </Text>
            <NumberInput
              borderColor={colors.borderSecondary}
              allowMouseWheel
              h="32px"
              min={1}
              id="amount"
              defaultValue={1}
            >
              <NumberInputField ref={quantity} h="32px" />
              <NumberInputStepper>
                <NumberIncrementStepper h="32px" />
                <NumberDecrementStepper h="32px" />
              </NumberInputStepper>
            </NumberInput>
            <Text mt="5px" fontWeight="normal">
              Obraz
            </Text>
            <ProductButton id="photo" disabled fontSize="sm" w="100px">
              Wgraj
            </ProductButton>
            <Text mt="5px" fontWeight="normal">
              Kategorie
            </Text>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
              colorScheme="orange"
            >
              <Flex flexDirection="column">
                {categories.map((category) => (
                  <Checkbox key={category.id} value={category.id}>
                    {category.name}
                  </Checkbox>
                ))}
              </Flex>
            </CheckboxGroup>
            <Flex justifyContent="flex-end">
              <ProductButton onClick={submitForm} fontSize="sm" w="100px">
                Dodaj
              </ProductButton>
            </Flex>
          </FormControl>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}
