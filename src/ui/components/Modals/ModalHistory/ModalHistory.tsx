import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  Stack,
  Heading,
  Icon,
} from '@chakra-ui/react'
import ProductButton from '../../CustomButtons/ProductButton/ProductButton'
import { ElementInfo } from './ModalListItem'
import { useColors } from '../../../theme/useColors'
import { FaUserCircle } from 'react-icons/fa'
import { memo } from 'react'

export const MoreInfoModal = memo(
  (props: { isOpen: boolean; onClose: () => void }) => {
    const colors = useColors()

    return (
      <Modal {...props} isCentered>
        <ModalOverlay backdropFilter="blur(1px)" />
        <ModalContent
          color={colors.fontPrimary}
          maxW="40rem"
          bgColor={colors.backgroundPrimary}
        >
          <ModalCloseButton />
          <ModalBody mt="10px">
            <Stack direction="row" alignItems="center">
              <Icon
                as={FaUserCircle}
                mr="5px"
                color={colors.fontPrimary}
                fontSize="70px"
              />
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
                m="25px 20px 10px 0"
              >
                <Heading fontSize="sm">Nazwa</Heading>
                <Heading fontSize="sm">Ilość</Heading>
              </Stack>
              <Stack direction="column" overflowY="scroll" maxH="35vh">
                <ElementInfo />
                <ElementInfo />
                <ElementInfo />
                <ElementInfo />
                <ElementInfo />
                <ElementInfo />
                <ElementInfo />
                <ElementInfo />
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter>
            <ProductButton
              fontSize="16px"
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
  }
)
