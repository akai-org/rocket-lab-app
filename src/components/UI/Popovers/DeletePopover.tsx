import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  Button,
  ButtonGroup,
  PopoverProps,
  Text,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import ProductButton from '../Custom Buttons/ProductButton/ProductButton'

interface DeletePopoverProps extends PopoverProps {
  onClick: () => void
  label: string
  buttonText?: string
  disabled?: boolean
  width?: string
  height?: string
  fontSize?: string
  styles?: boolean
}

const DeletePopover = (props: DeletePopoverProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const open = () => setIsOpen(!isOpen)
  const close = () => setIsOpen(false)
  return (
    <>
      <Popover onClose={close} isOpen={isOpen} placement="top">
        <PopoverTrigger>
          <Box cursor="pointer">
            {props.styles === false ? (
              <Box
                w="200px"
                onClick={() => {
                  props.onClick()
                  open()
                }}
              >
                {props.buttonText ? props.buttonText : 'Usuń'}
              </Box>
            ) : (
              <ProductButton
                ml="10px"
                fontSize={props.fontSize ? props.fontSize : '16px'}
                bgColor="red.500"
                w={props.width ? props.width : '80px'}
                h={props.height ? props.height : '32px'}
                onClick={() => {
                  props.onClick()
                  open()
                }}
                disabled={props.disabled}
              >
                {props.buttonText ? props.buttonText : 'Usuń'}
              </ProductButton>
            )}
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Uwaga</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>{props.label}</PopoverBody>
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

export default DeletePopover
