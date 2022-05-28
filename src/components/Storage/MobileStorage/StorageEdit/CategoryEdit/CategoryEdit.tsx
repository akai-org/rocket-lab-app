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
            fontSize="16px"
            fontWeight="500"
            color="#2D3748"
            textAlign="left"
            h="20px"
          >
            Edycja kategorii
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <FormControl fontSize="14px">
            <Text fontWeight={500} fontSize="14px">
              Nazwa
            </Text>
            <Input ref={name} h="32px" fontSize="14px" id="name" type="text" />
            {!nameIsValid && (
              <Text fontSize="14px" color="red">
                Wprowadź nazwę
              </Text>
            )}
            <Flex justifyContent="flex-end">
              <ProductButton
                onClick={submitForm}
                mt="10px"
                fontSize="14px"
                h="25px"
                w="80px"
              >
                Dodaj
              </ProductButton>
            </Flex>
            <Text fontWeight={500} fontSize="14px">
              Lista kategorii
            </Text>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
              colorScheme="orange"
            >
              <Flex flexDirection="column" fontSize="14px">
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
              <DeletePopover
                width="140px"
                height="25px"
                fontSize="14px"
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
