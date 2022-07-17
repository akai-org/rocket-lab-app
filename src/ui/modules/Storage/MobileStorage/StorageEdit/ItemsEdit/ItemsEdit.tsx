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
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { categoriesInfo } from '../../../../../../store/store'
import { API_URL } from '../../../../../../utils/constants'
import { fetcher } from '../../../../../../utils/requests'
import ProductButton from '../../../../../components/Custom Buttons/ProductButton/ProductButton'

const ItemsEdit = () => {
  const router = useRouter()
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
            fontSize="16px"
            fontWeight="500"
            color="#2D3748"
            textAlign="left"
            h="25px"
          >
            Dodanie części
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <FormControl fontSize="14px">
            <Text fontWeight={500} fontSize="14px">
              Nazwa
            </Text>
            <Input ref={name} h="32px" id="name" type="text" fontSize="14px" />
            {!nameIsValid && (
              <Text fontSize="12px" color="red">
                Wprowadź nazwę
              </Text>
            )}
            <Text fontWeight={500} mt="5px" fontSize="14px">
              Opis
            </Text>
            <Input
              h="32px"
              fontSize="14px"
              id="description"
              ref={description}
              type="text"
            />
            <Text fontWeight={500} mt="5px" fontSize="14px">
              Ilość
            </Text>
            <NumberInput
              allowMouseWheel
              h="32px"
              min={1}
              id="amount"
              defaultValue={1}
            >
              <NumberInputField ref={quantity} h="32px" fontSize="14px" />
              <NumberInputStepper>
                <NumberIncrementStepper h="32px" />
                <NumberDecrementStepper h="32px" />
              </NumberInputStepper>
            </NumberInput>
            <Text fontWeight={500} mt="5px" fontSize="14px">
              Obraz
            </Text>
            <ProductButton
              id="photo"
              disabled
              fontSize="14px"
              h="25px"
              w="80px"
            >
              Wgraj
            </ProductButton>
            <Text fontWeight={500} mt="5px" fontSize="14px">
              Kategorie
            </Text>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
              colorScheme="orange"
            >
              <Flex flexDirection="column" fontSize="14px">
                {categories.map((category) => (
                  <Checkbox value={category.id} key={category.id}>
                    <Text fontSize="14px">{category.name}</Text>
                  </Checkbox>
                ))}
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
