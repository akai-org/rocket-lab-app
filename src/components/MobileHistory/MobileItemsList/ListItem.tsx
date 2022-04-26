import { Flex, Image, Text, Box, Link, Avatar } from '@chakra-ui/react'

export interface ItemProps {
  avatar: string
  name: string
  time: string
  action: string
  description: string
}

interface Props {
  item: ItemProps
}

const ListItem = ({ item }: Props) => {
  return (
    <Flex flexDirection="row" maxW="353px" justifyContent="space-around">
      <Image src={item.avatar} w="48px" m="5px auto" />
      <Flex flexDirection="column" maxW="293px" justifyContent="space-around">
        <Flex flexDirection="row" maxW="293px" justifyContent="space-around">
          <Box textAlign="left" w="70%" m="0 auto">
            <Text fontSize="14px" fontWeight="500">
              {item.name}
            </Text>
            <Text fontSize="12px" fontWeight="400" color="#878585">
              {item.time}
            </Text>
          </Box>
        </Flex>
        <Box textAlign="left" w="70%" m="0 auto">
          <Text fontSize="14px" fontWeight="400">
            {item.action}
          </Text>
          <Text fontSize="14px" fontWeight="400">
            {item.description}
          </Text>
          <Link href="#" isExternal color="#FF7700">
            pokaż więcej
          </Link>
        </Box>
      </Flex>
    </Flex>
  )
}

export default ListItem
