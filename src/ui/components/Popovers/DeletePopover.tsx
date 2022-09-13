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
import { memo, useState } from 'react'
import { Box } from '@chakra-ui/react'
import { ProductButton } from 'ui/components'
import { useColors } from 'ui/theme'

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

export const DeletePopover = memo(function DeletePopover(
  props: DeletePopoverProps
) {
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
                backgroundColor={colors.errorPrimary}
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
})
