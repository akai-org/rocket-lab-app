import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from '@chakra-ui/react'
import { CategoryEdit } from './CategoryEdit'
import { ItemsEdit } from './ItemsEdit'
import { useColors } from 'ui/theme'
import { memo } from 'react'

export const StorageEdit = memo(function StorageEdit() {
  const colors = useColors()

  return (
    <Accordion
      borderRadius="6px"
      mb="20px"
      border={`1px solid ${colors.borderPrimary}`}
      allowMultiple
    >
      <AccordionItem border="none">
        <AccordionButton>
          <Text
            flex="1"
            m="5px 5px 5px 10px"
            fontSize="lg"
            fontWeight="normal"
            color={colors.fontSecondary}
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
})
