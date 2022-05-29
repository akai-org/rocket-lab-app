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
  Text,
  Flex,
} from '@chakra-ui/react'
import { useState } from 'react'
import { PopulatedCartList } from '../../../mongo/models/cart'

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
          <Box cursor="pointer" mt="5px" w="200px">
            <Text
              onClick={() => {
                props.onClick()
                open()
              }}
              fontSize="15px"
              as="u"
              color="#FF7700"
            >
              Podgląd wybranej listy
            </Text>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">{props.name}</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>
            {props.list.items.map((item) => {
              return (
                <Flex justifyContent="space-between">
                  <Text isTruncated>{item.item.name}</Text>
                  <Text>x{item.quantity}</Text>
                </Flex>
              )
            })}
          </PopoverBody>
        </PopoverContent>
      </Popover>
    </>
  )
}

export default ChosenListPopover
