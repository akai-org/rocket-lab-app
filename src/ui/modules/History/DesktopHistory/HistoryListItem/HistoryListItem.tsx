import { Badge, Box, Flex, Heading, Icon, Stack, Text } from '@chakra-ui/react'
import { FaUserCircle } from 'react-icons/fa'
import { useColors } from 'ui/theme'
import { HistoryListItemMessage } from '../HistoryListItemMessage'

export const HistoryListItem = () => {
  const colors = useColors()

  return (
    <Flex
      w="60vw"
      m="10px auto 5px 15px"
      flexDirection="column"
      maxW="2000px"
      color={colors.fontSecondary}
    >
      <Box m="10px 0 0 10px" w="100%">
        <Text size="sm" fontWeight="normal" m="5px">
          22 luty, 2022
        </Text>
        <Stack direction="row" mb="20px" w="100%">
          <Icon
            as={FaUserCircle}
            mr="5px"
            color={colors.fontPrimary}
            fontSize="50px"
          />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>
              <Badge variant="solid" colorScheme="orange" color="white">
                ITEM
                {/* props type */}
              </Badge>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" mb="20px" w="100%">
          <Icon
            as={FaUserCircle}
            mr="5px"
            color={colors.fontPrimary}
            fontSize="50px"
          />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>{' '}
              <Badge variant="solid" colorScheme="orange" color="white">
                ITEM
                {/* props type */}
              </Badge>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" mb="20px" w="100%">
          <Icon
            as={FaUserCircle}
            mr="5px"
            color={colors.fontPrimary}
            fontSize="50px"
          />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>{' '}
              <Badge variant="solid" colorScheme="orange" color="white">
                SCHEMA
                {/* props type */}
              </Badge>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
            </Stack>
          </Stack>
        </Stack>
        <Stack direction="row" mb="20px" w="100%">
          <Icon
            as={FaUserCircle}
            mr="5px"
            color={colors.fontPrimary}
            fontSize="50px"
          />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>{' '}
              <Badge variant="solid" colorScheme="orange" color="white">
                LIST
                {/* props type */}
              </Badge>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
            </Stack>
          </Stack>
        </Stack>
      </Box>
      <Box m="10px 0 0 10px" w="100%">
        <Text size="sm" fontWeight="normal" m="5px">
          22 luty, 2022
        </Text>
        <Stack direction="row" mb="20px" w="100%">
          <Icon
            as={FaUserCircle}
            mr="5px"
            color={colors.fontPrimary}
            fontSize="50px"
          />
          <Stack direction="column" w="90%" maxW="1600px">
            <Stack direction="row">
              <Heading size="sm">Rafał Walkowiak</Heading>
              <Text fontSize="sm">21:37</Text>{' '}
              <Badge variant="solid" colorScheme="orange" color="white">
                ITEM
                {/* props type */}
              </Badge>
            </Stack>
            <Stack direction="row">
              <HistoryListItemMessage />
            </Stack>
          </Stack>
        </Stack>
      </Box>
    </Flex>
  )
}
