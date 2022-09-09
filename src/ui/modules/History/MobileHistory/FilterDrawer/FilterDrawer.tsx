import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerFooter,
  DrawerBody,
  Stack,
  Text,
  Flex,
} from '@chakra-ui/react'
import { useColors } from 'ui/theme'
import { ProductButton } from 'ui/components'
import { useFilters } from 'utils/effects'
import DatePicker, { DateObject } from 'react-multi-date-picker'
import 'react-multi-date-picker/styles/backgrounds/bg-dark.css'
import 'react-multi-date-picker/styles/layouts/prime.css'

export const FilterDrawer = (props: {
  isOpen: boolean
  onClose: () => void
}) => {
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
                <DatePicker
                  onChange={(e: DateObject) => {
                    const day = e.day < 10 ? `0${e.day}` : `${e.day}`
                    const month =
                      e.month.number < 10
                        ? `0${e.month.number}`
                        : `${e.month.number}`
                    const year = e.year
                    const val = `${year}-${month}-${day}`
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
                  format="YYYY.MM.DD"
                  className={`${colors.datePickerTheme} rmdp-prime`}
                  placeholder="RRRR.MM.DD"
                  style={{
                    height: '40px',
                    width: '8rem',
                    borderRadius: '5px',
                    fontSize: 'sm',
                    padding: '3px 10px',
                    color: colors.fontPrimary,
                    backgroundColor: colors.backgroundPrimary,
                  }}
                />
              </Stack>
              <Stack direction="row" alignItems="center" w="185px" mr="15px">
                <Text color={colors.fontSecondary}>do:</Text>
                <DatePicker
                  onChange={(e: DateObject) => {
                    const day = e.day < 10 ? `0${e.day}` : `${e.day}`
                    const month =
                      e.month.number < 10
                        ? `0${e.month.number}`
                        : `${e.month.number}`
                    const year = e.year
                    const val = `${year}-${month}-${day}`
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
                  format="YYYY.MM.DD"
                  className={`${colors.datePickerTheme} rmdp-prime`}
                  placeholder="RRRR.MM.DD"
                  style={{
                    height: '40px',
                    width: '8rem',
                    borderRadius: '5px',
                    fontSize: 'sm',
                    padding: '3px 10px',
                    color: colors.fontPrimary,
                    backgroundColor: colors.backgroundPrimary,
                  }}
                />
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
}
