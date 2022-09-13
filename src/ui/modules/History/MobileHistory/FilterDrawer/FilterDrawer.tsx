import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Input,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { useColors } from 'ui/theme'
import { ProductButton } from 'ui/components'
import { memo } from 'react'
import { useFilters } from 'utils/effects'

export const FilterDrawer = memo(function FilterDrawer(props: {
  isOpen: boolean
  onClose: () => void
}) {
  const colors = useColors()
  const { handleSubmit, customQuery, setCustomQuery } = useFilters([
    'from',
    'to',
  ])

  return (
    <Drawer isOpen={props.isOpen} placement="bottom" onClose={props.onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <form onSubmit={handleSubmit}>
          <DrawerCloseButton />
          <DrawerHeader>Filtrowanie</DrawerHeader>
          <DrawerBody>
            <Flex flexDirection="row">
              <Stack direction="row" alignItems="center" w="185px" mr="15px">
                <Text color={colors.fontSecondary}>od:</Text>
                <Input
                  onChange={(e) => {
                    const val = e.currentTarget.value
                    setCustomQuery((state) => {
                      const copiedState = { ...state }
                      if (val && val.length !== 0) {
                        copiedState['from'] = val
                      } else {
                        delete copiedState['from']
                      }
                      return copiedState
                    })
                  }}
                  value={customQuery['from'] || ''}
                  type="date"
                  placeholder="DD.MM.RRRR"
                ></Input>
              </Stack>
              <Stack direction="row" alignItems="center" w="185px" mr="15px">
                <Text color={colors.fontSecondary}>do:</Text>
                <Input
                  onChange={(e) => {
                    const val = e.currentTarget.value
                    setCustomQuery((state) => {
                      const copiedState = { ...state }
                      if (val && val.length !== 0) {
                        copiedState['to'] = val
                      } else {
                        delete copiedState['to']
                      }
                      return copiedState
                    })
                  }}
                  value={customQuery['to'] || ''}
                  type="date"
                  placeholder="DD.MM.RRRR"
                ></Input>
              </Stack>
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <ProductButton
              fontSize="sm"
              w="70px"
              mr={3}
              onClick={props.onClose}
            >
              Anuluj
            </ProductButton>
            <ProductButton type="submit" fontSize="sm" w="90px">
              Wyszukaj
            </ProductButton>
          </DrawerFooter>
        </form>
      </DrawerContent>
    </Drawer>
  )
})
