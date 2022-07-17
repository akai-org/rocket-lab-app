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
      w="95%"
      m="0 auto"
      borderRadius="6px"
      border="1px solid #C4C4C4"
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            fontSize="17px"
            fontWeight="500"
            color="#2D3748"
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
