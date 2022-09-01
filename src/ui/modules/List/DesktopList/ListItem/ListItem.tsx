import { Flex, Image, Td, Text, Tr, useDisclosure } from '@chakra-ui/react'
import { memo } from 'react'
import { CartItem } from 'mongo'
import { ModalInfo } from 'ui/components'
import { useColors } from 'ui/theme'

interface Props extends CartItem {}

export const ListItem = memo((props: Props) => {
  const {
    isOpen: isOpenInfo,
    onOpen: onOpenInfo,
    onClose: onCloseInfo,
  } = useDisclosure()
  const colors = useColors()

  return props.item ? (
    <Tr fontSize="xs" color={colors.fontSecondary} h="40px">
      <Td>
        <Flex justifyContent="flex-start" cursor="pointer" onClick={onOpenInfo}>
          <Image src="item.png" w="40px" h="40px" />
          <Text lineHeight="40px" noOfLines={1} ml="10px">
            {props.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text noOfLines={1}>{props.item.description}</Text>
      </Td>
      <Td textAlign="right">
        <Text color={props.quantity ? 'inherit' : colors.errorPrimary}>
          {props.quantity ? props.quantity : 'brak w magazynie'}
        </Text>
      </Td>
      <ModalInfo
        categories={props.item.categories}
        id={props.id}
        name={props.item.name}
        description={props.item.description}
        imageUrl={props.item.imageUrl}
        quantity={props.item.quantity}
        onClose={onCloseInfo}
        isOpen={isOpenInfo}
        isCentered
      />
    </Tr>
  ) : null
})
