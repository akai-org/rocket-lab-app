import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Input,
} from '@chakra-ui/react'
import { useColors } from '../../../../../theme/useColors'
import ProductButton from '../../../../components/Custom Buttons/ProductButton/ProductButton'

const FilterDrawer = (props: { isOpen: boolean; onClose: () => void }) => {
  const colors = useColors()

  return (
    <Drawer isOpen={props.isOpen} placement="bottom" onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filtrowanie</DrawerHeader>
        <DrawerBody>
          <Input color={colors.fontPrimary} placeholder="Wpisz nazwę" />
        </DrawerBody>
        <DrawerFooter>
          <ProductButton fontSize="sm" w="70px" mr={3} onClick={props.onClose}>
            Anuluj
          </ProductButton>
          <ProductButton fontSize="sm" w="90px">
            Wyszukaj
          </ProductButton>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterDrawer
