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
import { useContext, useState, memo } from 'react'
import { AddItem } from './AddItem'
import { ProductButton } from 'ui/components'
import { ItemsList } from './ItemsList'
import { useDispatch } from 'react-redux'
import { fetcher } from 'utils/requests'
import { API_URL } from 'utils/constants'
import { addSchema } from 'store'
import { SchemasContext } from 'pages/schemes'
import { useColors } from 'ui/theme'

export const AddScheme = memo(function AddScheme() {
  const context = useContext(SchemasContext)

  const dispatch = useDispatch()
  const colors = useColors()
  const nameIsValid = context?.name.length !== 0 ? true : false
  const itemsIsValid = context?.items.length !== 0 ? true : false
  const [submitClicked, setSubmitClicked] = useState(false)

  //FIXME: No submit - there's no form
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
    <Accordion
      borderRadius="6px"
      border={`1px solid ${colors.borderPrimary}`}
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            fontSize="lg"
            fontWeight="normal"
            m="5px 5px 5px 15px"
            color={colors.fontSecondary}
            textAlign="left"
          >
            Dodaj Schemat
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <Text fontWeight="normal">Nazwa</Text>
          <Input
            borderColor={colors.borderSecondary}
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
          {!nameIsValid && submitClicked && (
            <Text fontSize="xs" color={colors.errorPrimary}>
              Wprowadź nazwę
            </Text>
          )}
          <Text fontWeight="normal" mt="10px">
            Opis
          </Text>
          <Input
            borderColor={colors.borderSecondary}
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
          <Text fontWeight="normal" mt="10px">
            Przedmioty
          </Text>
          <AddItem itemsValid={!itemsIsValid && submitClicked} />
          <ItemsList />
          <Flex justifyContent="flex-end">
            <ProductButton
              mt="20px"
              fontSize="sm"
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
})
