import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  ModalProps,
  Image,
  Text,
  Flex,
  Box,
  Stack,
  Heading,
  Avatar,
} from '@chakra-ui/react'
import ProductButton from '../../../UI/Custom Buttons/ProductButton/ProductButton'

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
              <Text fontSize="sm">22 luty, 2022</Text>
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
            <Stack direction="column">
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <Image
                    boxSize="40px"
                    objectFit="cover"
                    src="/item.png"
                    alt="Item"
                    mr="5px"
                  />
                  <Text fontSize="sm">Silnik od malucha</Text>
                </Stack>
                <Text fontSize="sm">1 szt.</Text>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <Image
                    boxSize="40px"
                    objectFit="cover"
                    src="/item.png"
                    alt="Item"
                    mr="5px"
                  />
                  <Text fontSize="sm">Śruba lewoskrętna</Text>
                </Stack>
                <Text fontSize="sm">25 szt.</Text>
              </Stack>

              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
              >
                <Stack direction="row" alignItems="center">
                  <Image
                    boxSize="40px"
                    objectFit="cover"
                    src="/item.png"
                    alt="Item"
                    mr="5px"
                  />
                  <Text fontSize="sm">Migomat turystyczny</Text>
                </Stack>
                <Text fontSize="sm">1 szt.</Text>
              </Stack>
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
