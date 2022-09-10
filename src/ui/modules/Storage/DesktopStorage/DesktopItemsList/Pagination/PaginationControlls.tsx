import { Flex, Select, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { usePagination } from 'utils/effects'
import { sortingType } from 'utils'
import { PaginationSettings } from 'ui/components'
import { Sorting } from '../Sorting'
import { useColors } from 'ui/theme'
import { memo } from 'react'

interface Props extends PaginationSettings {
  setListType: (type: sortingType) => void
  listType: sortingType
}

export const PaginationControlls: React.FC<Props> = memo(
  function PaginationControlls({ listType, setListType }) {
    const {
      maxPage,
      minPage,
      nextPage,
      onToDisplayChange,
      previousPage,
      itemsCount,
      toDisplay,
      currentPage,
      query,
    } = usePagination()
    const colors = useColors()

    let rangeEnd = previousPage * toDisplay

    if (rangeEnd > itemsCount) {
      rangeEnd = itemsCount
    }

    return (
      <Flex
        justifyContent="space-between"
        borderBottom="1px solid #C4C4C4"
        h="45px"
        p="12px 20px"
      >
        <Flex color={colors.fontNeutral}>
          <Flex>
            <Select
              onChange={onToDisplayChange}
              color={colors.fontSecondary}
              variant="unstyled"
              h="25px"
              w="70px"
            >
              <option value="15">15</option>
              <option value="45">45</option>
              <option value="117">117</option>
            </Select>
          </Flex>
          <Flex fontSize="lg" ml="10px" w="120px" justifyContent="space-around">
            <Link
              href={{ query: { ...query, page: minPage, toDisplay } }}
              passHref
            >
              <Icon
                cursor="pointer"
                _hover={{
                  color: colors.fontPrimary,
                }}
                as={BiArrowToLeft}
              />
            </Link>
            <Link
              href={{ query: { ...query, page: previousPage, toDisplay } }}
              passHref
            >
              <Icon
                cursor="pointer"
                _hover={{
                  color: colors.fontPrimary,
                }}
                as={IoIosArrowBack}
              />
            </Link>

            <Link
              href={{
                query: { ...query, page: nextPage, toDisplay },
              }}
              passHref
            >
              <Icon
                cursor="pointer"
                _hover={{
                  color: colors.fontPrimary,
                }}
                as={IoIosArrowForward}
              />
            </Link>

            <Link
              href={{ query: { ...query, page: maxPage, toDisplay } }}
              passHref
            >
              <Icon
                cursor="pointer"
                _hover={{
                  color: colors.fontPrimary,
                }}
                as={BiArrowToRight}
              />
            </Link>
          </Flex>
          <Text color={colors.fontSecondary} ml="10px" lineHeight="20px">
            {currentPage} z {maxPage}
          </Text>
        </Flex>
        <Flex>
          <Sorting />
          <Icon
            cursor="pointer"
            color={
              listType === 'grid' ? colors.fontSecondary : colors.fontNeutral
            }
            fontSize="lg"
            mr="10px"
            onClick={() => {
              setListType('grid')
            }}
            as={BsFillGridFill}
          />
          <Icon
            cursor="pointer"
            color={
              listType === 'list' ? colors.fontSecondary : colors.fontNeutral
            }
            fontSize="lg"
            onClick={() => {
              setListType('list')
            }}
            as={FaThList}
          />
        </Flex>
      </Flex>
    )
  }
)
