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
} from '@chakra-ui/react'
import { PopulatedItem } from 'mongo'
import { ProductButton } from 'ui/components'
import { useColors } from 'ui/theme'
import { memo } from 'react'

interface ModalInfoProps
  extends Omit<ModalProps, 'children'>,
    Pick<
      PopulatedItem,
      'imageUrl' | 'name' | 'quantity' | 'description' | 'categories'
    > {
  id: string
}

export const ModalInfo = memo((props: ModalInfoProps) => {
  const colors = useColors()

  return (
    <Modal {...props}>
      <ModalOverlay backdropFilter="blur(3px)" />
      <ModalContent maxW="40rem" bgColor={colors.backgroundPrimary}>
        <ModalHeader>Informacje o produkcie</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Flex>
            <Image src={props.imageUrl} w="80px" h="80px" mr="10px" />
            <Box>
              <Text fontWeight="normal" noOfLines={2} fontSize="md">
                {props.name}
              </Text>
              <Text>Ilość: {props.quantity}</Text>
            </Box>
          </Flex>
          <Text mt="5px">
            Opis:
            <br /> {props.description}
          </Text>
          <Text mt="5px">
            Kategorie:
            <br />
            {props.categories.map((category) => `${category.name}, `)}
          </Text>
        </ModalBody>
        <ModalFooter>
          <ProductButton
            fontSize="sm"
            colorScheme="blue"
            ml="10px"
            w="80px"
            onClick={props.onClose}
          >
            Zamknij
          </ProductButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
})
