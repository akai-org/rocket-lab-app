import {
  Input,
  Text,
  Box,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import AddItem from './AddItem/AddItem'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ItemsList from './ItemsList/ItemsList'
import { useSelector } from 'react-redux'
import { schemeInfo } from '../../../../store/store'

const AddScheme = () => {
  const name = useRef<HTMLInputElement>(null)
  const [nameIsValid, setNameIsValid] = useState(true)
  const [itemsIsValid, setItemsIsValid] = useState(true)
  const schemeData = useSelector(schemeInfo)

  const handleSubmit = () => {
    if (name.current!.value) setNameIsValid(true)
    else setNameIsValid(false)

    if (schemeData.items.length === 0) setItemsIsValid(false)
    else setItemsIsValid(true)
  }

  return (
    <Accordion
      p="5px 5px 5px 15px"
      borderRadius="6px"
      border="1px solid #C4C4C4"
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            fontSize="20px"
            fontWeight="600"
            color="#4A5568"
            textAlign="left"
          >
            Dodaj Schemat
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
          <Text fontWeight={500} mt="10px">
            Opis
          </Text>
          <Input h="32px" id="description" type="text" />
          <Text fontWeight={500} mt="10px">
            Przedmioty
          </Text>
          <AddItem itemsValid={itemsIsValid} />
          <ItemsList />
          <Flex justifyContent="flex-end">
            <ProductButton
              mt="20px"
              fontSize="16px"
              onClick={handleSubmit}
              w="150px"
            >
              Dodaj schemat
            </ProductButton>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddScheme
