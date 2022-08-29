import { Flex, Input, Select, Stack, Text } from '@chakra-ui/react'
import { useColors } from 'ui/theme'
import React, {memo} from 'react';


export const Filter = memo(() => {
  const colors = useColors()

  return (
    <Flex
      flexDirection="row"
      m="5px 0 10px 0"
      w="100%"
      p="15px"
      alignItems="center"
      justifyContent="flex-start"
    >
      <Stack direction="row" alignItems="center" w="185px" mr="15px">
        <Text color={colors.fontSecondary}>od:</Text>
        <Input type="data" placeholder="DD.MM.RRRR"></Input>
      </Stack>
      <Stack direction="row" alignItems="center" w="185px" mr="15px">
        <Text color={colors.fontSecondary}>do:</Text>
        <Input type="data" placeholder="DD.MM.RRRR"></Input>
      </Stack>
      <Stack direction="row">
        <Text color={colors.fontSecondary}>sortuj:</Text>
        {
          // TODO: History sorting
        }
        <Select
          color={colors.fontPrimary}
          size="md"
          variant="unstyled"
          placeholder="wybierz"
        >
          <option value="najnowsze">najnowsze</option>
          <option value="najstarsze">najstarsze</option>
        </Select>
      </Stack>
    </Flex>
  )
}
)