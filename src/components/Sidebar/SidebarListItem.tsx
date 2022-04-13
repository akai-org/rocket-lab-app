import { Text, Flex } from '@chakra-ui/react'

const SidebarListItem: React.FC<{ quantity: string; id: string }> = (props) => {
  return (
    <Flex flexDirection="row" justifyContent="space-between" p="10px 20px">
      <Text>{props.id}</Text>
      <Text>x{props.quantity}</Text>
    </Flex>
  )
}

export default SidebarListItem
