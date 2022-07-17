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
} from '@chakra-ui/react'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import ProductButton from '../Custom Buttons/ProductButton/ProductButton'
import { useColors } from '../../../theme/useColors'

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
  const colors = useColors()

  return (
    <>
      <Popover onClose={close} isOpen={isOpen} placement="top">
        <PopoverTrigger>
          <Box cursor="pointer">
            {props.styles === false ? (
              <Box
                w="200px"
                onClick={() => {
                  open()
                }}
              >
                {props.buttonText ? props.buttonText : 'Usuń'}
              </Box>
            ) : (
              <ProductButton
                ml="10px"
                fontSize={props.fontSize ? props.fontSize : 'sm'}
                bgColor={colors.errorPrimary}
                w={props.width ? props.width : '80px'}
                h={props.height ? props.height : '32px'}
                onClick={() => {
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
          <PopoverHeader fontWeight="normal">Uwaga</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>{props.label}</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline" onClick={close}>
                Anuluj
              </Button>
              <Button
                colorScheme={colors.errorPrimary}
                onClick={() => {
                  props.onClick()
                  close()
                }}
              >
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
