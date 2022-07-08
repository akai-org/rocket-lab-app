import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Flex,
  Input,
  Text,
} from '@chakra-ui/react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'
import AddItem from '../../DesktopSchemes/AddScheme/AddItem/AddItem'
import ItemsList from './ItemsList/ItemsList'
import { useContext, useState } from 'react'
import { SchemasContext } from '../../../../pages/schemes'
import { API_URL } from '../../../../utils/constants'
import { fetcher } from '../../../../utils/requests'
import { useDispatch } from 'react-redux'
import { addSchema } from '../../../../store/Slices/schemasSlice'

const AddScheme = () => {
  const dispatch = useDispatch()
  const context = useContext(SchemasContext)
  const nameIsValid = context?.name.length !== 0 ? true : false
  const itemsIsValid = context?.items.length !== 0 ? true : false
  const [submitClicked, setSubmitClicked] = useState(false)


  const handleSubmit = async () => {

    setSubmitClicked(true)

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
        context?.clear()
        setSubmitClicked(false)
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
            noOfLines={1}
            fontSize="17px"
            fontWeight="500"
            color="#2D3748"
            textAlign="left"
          >
            Dodaj Schemat
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontWeight={500}>Nazwa</Text>
          <Input
            onChange={(e) => context?.updateName(e.currentTarget.value)}
            h="32px"
            id="name"
            type="text"
            value={context?.name}
          />
          {!nameIsValid && submitClicked && (
            <Text fontSize="14px" color="red">
              Wprowadź nazwę
            </Text>
          )}
          <Text fontWeight={500} mt="10px">
            Opis
          </Text>
          <Input
            onChange={(e) => context?.updateDescription(e.currentTarget.value)}
            h="32px"
            id="description"
            type="text"
            value={context?.description}
          />
          <Text fontWeight={500} mt="10px">
            Przedmioty
          </Text>
          <AddItem itemsValid={!itemsIsValid && submitClicked} />
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
