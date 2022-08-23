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
} from '../../../../../../store/Slices/categoriesSlice'
import { categoriesInfo } from '../../../../../../store/store'
import { API_URL } from '../../../../../../utils/constants'
import { fetcher } from '../../../../../../utils/requests'
import { ProductButton, DeletePopover } from 'ui/components'
import Category from './Category/Category'
import { useColors } from 'ui/theme'

const CategoryEdit = () => {
  const categories = useSelector(categoriesInfo).categories
  const colors = useColors()
  const [nameIsValid, setNameIsValid] = useState(true)
  const [checkboxes, setCheckboxes] = useState([''])
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
            Edycja kategorii
          </Box>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <FormControl color={colors.fontSecondary} fontSize="xs">
            <Text fontWeight="normal" fontSize="xs">
              Nazwa
            </Text>
            <Input
              ref={name}
              borderColor={colors.borderSecondary}
              h="32px"
              fontSize="xs"
              id="name"
              type="text"
            />
            {!nameIsValid && (
              <Text fontSize="xs" color={colors.errorPrimary}>
                Wprowadź nazwę
              </Text>
            )}
            <Flex justifyContent="flex-end">
              <ProductButton
                onClick={submitForm}
                mt="10px"
                fontSize="xs"
                h="25px"
                w="80px"
              >
                Dodaj
              </ProductButton>
            </Flex>
            <Text fontWeight="normal" fontSize="xs">
              Lista kategorii
            </Text>
            <CheckboxGroup
              onChange={(e) => setCheckboxes(e.map((el) => el.toString()))}
              colorScheme="orange"
            >
              <Flex flexDirection="column" fontSize="xs">
                {categories.map((category) => (
                  <Category
                    categoryName={category.name}
                    value={category.id}
                    id={category.id}
                    key={category.id}
                  />
                ))}
              </Flex>
            </CheckboxGroup>
            <Flex justifyContent="flex-end" mt="15px">
              <DeletePopover
                width="140px"
                height="25px"
                fontSize="xs"
                label="Czy na pewno chcesz usunąć zaznaczone kategorie?"
                buttonText="Usuń zaznaczone"
                onClick={handleDeleteCategories}
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
