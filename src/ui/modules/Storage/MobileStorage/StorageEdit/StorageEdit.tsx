import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from '@chakra-ui/react'
import CategoryEdit from './CategoryEdit/CategoryEdit'
import ItemsEdit from './ItemsEdit/ItemsEdit'
import { useColors } from '../../../../../theme/useColors'

const StorageEdit = () => {
  const colors = useColors()

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
            fontSize="md"
            fontWeight="normal"
            color={colors.fontSecondary}
            textAlign="left"
          >
            Edycja Magazynu
          </Text>
          <AccordionIcon color={colors.fontSecondary} />
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
