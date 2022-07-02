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
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from '../../../../../store/Slices/itemsSlice'
import { categoriesInfo } from '../../../../../store/store'
import { API_URL } from '../../../../../utils/constants'
import { fetcher } from '../../../../../utils/requests'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'

const ItemsEdit = () => {
  const dispatch = useDispatch()
  const categories = useSelector(categoriesInfo).categories
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
            fontSize="18px"
            fontWeight="500"
            color="#2D3748"
            textAlign="left"
            h="30px"
          >
            Dodanie części
          </Text>
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
              defaultValue={1}
            >
              <NumberInputField ref={quantity} h="32px" />
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
                {categories.map((category) => (
                  <Checkbox key={category.id} value={category.id}>
                    {category.name}
                  </Checkbox>
                ))}
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
