import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Checkbox,
  CheckboxGroup,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Text,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../../../UI/Popovers/DeletePopover'

const CategoryEdit = () => {
  const [nameIsValid, setNameIsValid] = useState(true)
  const [checkboxes, setCheckboxes] = useState([''])
  const name = useRef<HTMLInputElement>(null)
  const submitForm = () => {
    if (name.current!.value) {
      setNameIsValid(true)
      const data = {
        name: name.current!.value,
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
          >
            Edycja kategorii
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
            <Flex justifyContent="flex-end">
              <ProductButton
                onClick={submitForm}
                mt="10px"
                fontSize="16px"
                w="100px"
              >
                Dodaj
              </ProductButton>
            </Flex>
            <FormLabel htmlFor="list">Lista Kategorii</FormLabel>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
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
              <DeletePopover
                width="160px"
                label="Czy na pewno chcesz usunąć zaznaczone kategorie?"
                buttonText="Usuń zaznaczone"
                onClick={() => {}}
                disabled={!Boolean(...checkboxes)}
              />
            </Flex>
          </FormControl>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default CategoryEdit
