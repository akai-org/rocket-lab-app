import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  CheckboxGroup,
  Flex,
  FormControl,
  Input,
  Text,
} from '@chakra-ui/react'
import { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  addCategory,
  removeCategories,
} from '../../../../../store/Slices/categoriesSlice'
import { categoriesInfo } from '../../../../../store/store'
import { API_URL } from '../../../../../utils/constants'
import { fetcher } from '../../../../../utils/requests'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'
import DeletePopover from '../../../../UI/Popovers/DeletePopover'
import Category from './Category/Category'

const CategoryEdit = () => {
  const categories = useSelector(categoriesInfo).categories
  const [nameIsValid, setNameIsValid] = useState(true)
  const [checkboxes, setCheckboxes] = useState<string[]>([])
  const dispatch = useDispatch()
  const name = useRef<HTMLInputElement>(null)

  const submitForm = async () => {
    if (name.current!.value) {
      setNameIsValid(true)
      await onAddCategory()
      if (name.current) {
        name.current.value = ''
      }
    } else {
      setNameIsValid(false)
    }
  }

  const handleDeleteCategories = async () => {
    try {
      const deletedCategories = await fetcher(
        API_URL + '/api/categories/delete',
        {
          method: 'DELETE',
          body: { categoriesIds: checkboxes },
        }
      )
      console.log({ deletedCategories, checkboxes })
      setCheckboxes([])
      dispatch(removeCategories(deletedCategories))
    } catch (error) {
      console.log(error)
    }
  }

  const onAddCategory = async () => {
    try {
      const addedCategory = await fetcher(API_URL + '/api/categories/add', {
        method: 'POST',
        body: name.current?.value,
      })
      dispatch(addCategory(addedCategory))
    } catch (error) {
      console.log(error)
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
            h="30px"
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
              {/* TODO: */}
              <Flex flexDirection="column">
                {categories.map((category) => (
                  <Category
                    categoryName={category.name}
                    value={category.id}
                    key={category.id}
                    id={category.id}
                  />
                ))}
              </Flex>
            </CheckboxGroup>
            <Flex justifyContent="flex-end" mt="20px">
              <DeletePopover
                width="160px"
                label="Czy na pewno chcesz usunąć zaznaczone kategorie?"
                buttonText="Usuń zaznaczone"
                onClick={handleDeleteCategories}
                disabled={checkboxes.length === 0}
              />
            </Flex>
          </FormControl>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default CategoryEdit
