import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Text,
} from '@chakra-ui/react'
import CategoryEdit from './CategoryEdit/CategoryEdit'
import ItemsEdit from './ItemsEdit/ItemsEdit'

const StorageEdit = () => {
  return (
    <Accordion
      borderRadius="6px"
      mb="20px"
      border="1px solid #C4C4C4"
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            m="5px 5px 5px 10px"
            fontSize="20px"
            fontWeight="600"
            color="#4A5568"
            textAlign="left"
          >
            Edycja Magazynu
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel>
          <ItemsEdit />
          <CategoryEdit />
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default StorageEdit
