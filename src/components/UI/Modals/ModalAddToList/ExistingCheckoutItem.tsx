import { Tr, Td, Flex, Image, Text } from '@chakra-ui/react'
import { CheckoutItemProps } from './CheckoutItem'

export const ExistingCheckoutItem = ({ item }: CheckoutItemProps) => {
  return (
    <Tr fontSize="16px" fontWeight="700">
      <Td w="90%">
        <Flex lineHeight="40px">
          <Image src={item.item.imageUrl} w="40px" />
          <Text ml="10px" fontWeight="400">
            {item.item.name}
          </Text>
        </Flex>
      </Td>
      <Td>
        <Text>{item.quantity}</Text>
      </Td>
    </Tr>
  )
}
