import { Flex, Input, Select, Stack, Text } from '@chakra-ui/react'
import { useColors } from '../../../../theme/useColors'

const Filter = () => {
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
      <Select
        color={colors.fontPrimary}
        variant="flushed"
        h="40px"
        w="70px"
        mr="15px"
      >
        <option value="15">15</option>
        <option value="45">45</option>
        <option value="117">117</option>
      </Select>
      <Stack direction="row" alignItems="center" w="170px" mr="15px">
        <Text color={colors.fontSecondary}>od:</Text>
        <Input type="data" placeholder="DD.MM.RRRR"></Input>
      </Stack>
      <Stack direction="row" alignItems="center" w="170px" mr="15px">
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

export default Filter
