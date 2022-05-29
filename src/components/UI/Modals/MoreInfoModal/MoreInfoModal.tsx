import {
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Image,
  Text,
  Stack,
  Heading,
  Avatar,
} from '@chakra-ui/react'
import ProductButton from '../../Custom Buttons/ProductButton/ProductButton'
import ModalListItem from './ModalListItem'

const MoreInfoModal = () => {
  return (
    <>
      <ModalOverlay backdropFilter="blur(1px)" />
      <ModalContent maxW="40rem" mt="auto">
        <ModalCloseButton />
        <ModalBody mt="10px">
          <Stack direction="row" alignItems="center">
            <Avatar size="lg" backgroundColor="black" />
            <Stack direction="column">
              <Stack direction="row">
                <Heading size="sm">Rafał Walkowiak</Heading>
                <Text fontSize="sm">21:37</Text>
              </Stack>
              <Text fontSize="sm" isTruncated>
                22 luty, 2022
              </Text>
            </Stack>
          </Stack>
          <Stack direction="column">
            <Stack
              direction="row"
              justifyContent="space-between"
              m="25px 0 10px 0"
            >
              <Heading fontSize="sm">Nazwa</Heading>
              <Heading fontSize="sm">Ilość</Heading>
            </Stack>
            <Stack direction="column" overflow="scroll" maxH="35vh">
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
              <ModalListItem />
            </Stack>
          </Stack>
        </ModalBody>
        <ModalFooter>
          <ProductButton
            fontSize="16px"
            colorScheme="orange"
            ml="10px"
            w="80px"
          >
            Zamknij
          </ProductButton>
        </ModalFooter>
      </ModalContent>
    </>
  )
}

export default MoreInfoModal
