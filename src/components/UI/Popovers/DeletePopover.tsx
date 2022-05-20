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
import { AiOutlineClose } from 'react-icons/ai'
import { Box } from '@chakra-ui/react'
import ProductButton from '../Custom Buttons/ProductButton/ProductButton'

interface DeletePopoverProps extends PopoverProps {
  onClick: () => void
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
            <ProductButton
              ml="10px"
              fontSize="16px"
              bgColor="red.500"
              w="80px"
              onClick={
                //   TODO: Delete list
                open
              }
            >
              Usuń
            </ProductButton>
          </Box>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Uwaga</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Czy na pewno chcesz usunąć tę listę?</PopoverBody>
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
