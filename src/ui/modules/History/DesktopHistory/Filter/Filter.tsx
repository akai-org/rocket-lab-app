import { Button, Flex, Input, Select, Stack, Text } from '@chakra-ui/react'
import { useColors } from '../../../../../theme/useColors'
import { useFilters } from '../../../../../utils/effects/useFilters'

const Filter = () => {
  const colors = useColors()
  const { handleSubmit, customQuery, setCustomQuery } = useFilters([
    'from',
    'to',
  ])

  return (
    <form onSubmit={handleSubmit}>
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
          <Input
            onChange={(e) => {
              const val = e.currentTarget.value
              setCustomQuery((state) => {
                const copiedState = { ...state }
                copiedState['from'] = val
                return copiedState
              })
            }}
            value={customQuery['from']}
            type="data"
            placeholder="DD.MM.RRRR"
          ></Input>
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
          <Flex justifyContent="flex-end" p="25px 0 5px 0">
            <Button
              type="submit"
              w="120px"
              h="40px"
              bgColor={colors.orangePrimary}
              color="white"
            >
              Wyszukaj
            </Button>
          </Flex>
        </Stack>
      </Flex>
    </form>
  )
}

export default Filter
