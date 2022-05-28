import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
} from '@chakra-ui/react'
import CategoryEdit from './CategoryEdit/CategoryEdit'
import ItemsEdit from './ItemsEdit/ItemsEdit'

const StorageEdit = () => {
  return (
    <Accordion
      p="10px"
      mb="20px"
      borderRadius="6px"
      border="1px solid #C4C4C4"
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Box
            flex="1"
            fontSize="20px"
            fontWeight="500"
            color="#2D3748"
            textAlign="left"
          >
            Edycja Magazynu
          </Box>
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
