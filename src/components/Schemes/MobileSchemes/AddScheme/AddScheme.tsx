import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Text,
} from '@chakra-ui/react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'

const AddScheme = () => {
  return (
    <Accordion
      w="95%"
      m="10px auto"
      borderRadius="6px"
      border="1px solid #C4C4C4"
      allowMultiple
    >
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
            Przedmiot spoza magazynu
          </Text>
          <AccordionIcon />
        </AccordionButton>
        <AccordionPanel></AccordionPanel>
      </AccordionItem>
    </Accordion>
  )
}

export default AddScheme
