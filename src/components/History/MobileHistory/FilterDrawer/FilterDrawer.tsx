import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Input,
} from '@chakra-ui/react'

const FilterDrawer = (props: { isOpen: boolean; onClose: () => void }) => {
  return (
    <Drawer isOpen={props.isOpen} placement="right" onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>Filtrowanie</DrawerHeader>

        <DrawerBody>
          <Input placeholder="Wpisz nazwę" />
        </DrawerBody>

        <DrawerFooter>
          <Button variant="outline" mr={3} onClick={props.onClose}>
            Anuluj
          </Button>
          <Button colorScheme="orange">Wyszukaj</Button>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  )
}

export default FilterDrawer
