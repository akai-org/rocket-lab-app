import {
  Input,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Flex,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import AddItem from './AddItem/AddItem'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import ItemsList from './ItemsList/ItemsList'
import { useDispatch } from 'react-redux'
import { fetcher } from '../../../../utils/requests'
import { API_URL } from '../../../../utils/constants'
import { addSchema } from '../../../../store/Slices/schemasSlice'
import { SchemasContext } from '../../../../pages/schemes'

const AddScheme = () => {
  const context = useContext(SchemasContext)

  const dispatch = useDispatch()

  const [nameIsValid, setNameIsValid] = useState(true)
  const [itemsIsValid, setItemsIsValid] = useState(true)

  //FIXME: No submit - there's no form
  const handleSubmit = async () => {
    if (context?.name.length !== 0) setNameIsValid(true)
    else setNameIsValid(false)

    if (context?.items.length === 0) setItemsIsValid(false)
    else setItemsIsValid(true)

    if (nameIsValid && itemsIsValid) {
      try {
        const addedSchema = await fetcher(API_URL + '/api/schemas/add', {
          method: 'POST',
          body: {
            name: context?.name,
            description: context?.description,
            items: context?.items,
          },
        })
        dispatch(addSchema(addedSchema))
      } catch (error) {
        console.log(error)
      }
    }
  }

  return (
    <Accordion borderRadius="6px" border="1px solid #C4C4C4" allowMultiple>
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            fontSize="20px"
            fontWeight="600"
            m="5px 5px 5px 15px"
            color="#4A5568"
            textAlign="left"
          >
            Dodaj Schemat
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontWeight={500}>Nazwa</Text>
          <Input
            onChange={(e) => {
              if (context) {
                context.updateName(e.currentTarget.value)
              }
            }}
            h="32px"
            id="name"
            type="text"
            value={context?.name}
          />
          {!nameIsValid && (
            <Text fontSize="14px" color="red">
              Wprowadź nazwę
            </Text>
          )}
          <Text fontWeight={500} mt="10px">
            Opis
          </Text>
          <Input
            h="32px"
            id="description"
            type="text"
            onChange={(e) => {
              if (context) {
                context.updateDescription(e.currentTarget.value)
              }
            }}
            value={context?.description}
          />
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
