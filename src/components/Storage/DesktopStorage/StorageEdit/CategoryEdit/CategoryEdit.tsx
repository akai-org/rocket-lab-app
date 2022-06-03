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
import { useSelector } from 'react-redux'
import { categoriesInfo } from '../../../../../store/store'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../../../UI/Popovers/DeletePopover'

const CategoryEdit = () => {
  const globalCategories = useSelector(categoriesInfo).categories
  const [categories, setCategories] = useState(globalCategories)
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
    <Accordion allowMultiple mt="10px">
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
            Edycja kategorii
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
            <Text fontWeight={500}>Lista kategorii</Text>
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
