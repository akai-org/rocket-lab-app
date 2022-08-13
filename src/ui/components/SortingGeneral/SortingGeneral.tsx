import { Flex, Select, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { SortType } from '../../../services/itemsService'
import { validateSortParam } from '../../../utils/dataValidation/validateSortParam'
import queryString from 'query-string'
import { FIRST_PAGE } from '../../../utils/constants'
import { useColors } from '../../theme/useColors'
import { memo } from 'react'

export const SortingGeneral = memo(() => {
  const router = useRouter()
  const query = queryString.parseUrl(router.asPath).query
  const colors = useColors()

  let sort: SortType

  if (!validateSortParam(query.sort as string | undefined)) {
    sort = 'newest'
  } else {
    sort = query.sort as SortType
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value
    if (value !== sort) {
      router.push({ query: { ...query, sort: value, page: FIRST_PAGE } })
    }
  }

  return (
    <Flex flexDirection="row">
      <Text color={colors.fontNeutral}>sortuj po:</Text>
      <Select
        onChange={handleChange}
        variant="unstyled"
        w="140px"
        ml="10px"
        color={colors.fontSecondary}
        value={sort}
      >
        {/* TODO: Display options smarter */}
        <option value="newest">najnowsze</option>
        <option value="oldest">najstarsze</option>
        <option value="alphabetically">alfabetycznie</option>
      </Select>
    </Flex>
  )
})
