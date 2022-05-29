import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  PopoverProps,
  Box,
  PopoverFooter,
  ButtonGroup,
  Button,
} from '@chakra-ui/react'
import { useState } from 'react'
import { PopulatedCartList } from '../../../mongo/models/cart'
import ProductButton from '../Custom Buttons/ProductButton/ProductButton'

interface ChosenListPopoverProps extends PopoverProps {
  onClick: () => void
  buttonText?: string
  disabled?: boolean
  width?: string
  height?: string
  name: string
  fontSize?: string
  list: PopulatedCartList
}

const ChosenListPopover = (props: ChosenListPopoverProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  return (
    <>
      <Popover onClose={close} isOpen={isOpen} placement="top">
        <PopoverTrigger>
          <Box cursor="pointer">
            <ProductButton
              onClick={() => {
                props.onClick()
                open()
              }}
              fontSize="18px"
              w="120px"
            >
              Trigger
            </ProductButton>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">{props.name}</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            Are you sure you want to have that milkshake?
          </PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={close}>
                Anuluj
              </Button>
              <Button colorScheme="red" onClick={close}>
                Usuń
              </Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default ChosenListPopover
