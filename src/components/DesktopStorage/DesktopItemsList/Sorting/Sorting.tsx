import { Flex, Icon, Select, Text } from '@chakra-ui/react'
import React, { ChangeEvent } from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { sortingType } from '../../../../utils/types/frontendGeneral'
import { useRouter } from 'next/router'
import NextLink from 'next/link'
import { FIRST_PAGE, ITEMS_QUERY_LIMIT } from '../../../../utils/constants'

export const Sorting: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
  itemsCount: number | undefined
}> = (props) => {
  const router = useRouter()
  const query = router.query

  const presumedToDisplay = query.toDisplay

  const toDisplay = presumedToDisplay ? +presumedToDisplay : ITEMS_QUERY_LIMIT

  const currentPage = query.page ? +(query.page as string) : FIRST_PAGE

  const itemsCount = props.itemsCount ?? 0

  const presumedNextPage = currentPage + FIRST_PAGE
  const presumedPreviousPage = currentPage - FIRST_PAGE

  const minPage = FIRST_PAGE
  const maxPage = Math.ceil(itemsCount / toDisplay)

  const nextPage = presumedNextPage <= maxPage ? presumedNextPage : maxPage
  const previousPage =
    presumedPreviousPage >= minPage ? presumedPreviousPage : minPage

  const onToDisplayChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const newToDisplay = +e.target.value

    let page = currentPage

    if(newToDisplay !== toDisplay) {
      const passedItems = toDisplay * page
      const toPassedItems = passedItems - toDisplay + newToDisplay
      page = Math.round(toPassedItems / newToDisplay)
    }

    router.push({ query: { page, toDisplay: newToDisplay } })
  }


  return (
    <Flex
      justifyContent="space-between"
      borderBottom="1px solid #C4C4C4"
      h="45px"
      p="12px 20px"
    >
      <Flex color="#C4C4C4">
        <Flex>
          <Text w="130px">Items per page:</Text>
          <Select
            onChange={onToDisplayChange}
            color="black"
            variant="flushed"
            h="25px"
            w="80px"
          >
            <option value="2">2</option>
            <option value="4">4</option>
            <option value="15">15</option>
            <option value="45">45</option>
            <option value="117">117</option>
          </Select>
        </Flex>
        <Text m="0 40px">1 - 5 of 20</Text>
        <Flex fontSize="20px" w="120px" justifyContent="space-around">
          <NextLink href={{ query: { page: minPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={BiArrowToLeft}
            />
          </NextLink>
          <NextLink
            href={{ query: { page: previousPage, toDisplay } }}
            passHref
          >
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={IoIosArrowBack}
            />
          </NextLink>

          <NextLink href={{ query: { page: nextPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={IoIosArrowForward}
            />
          </NextLink>

          <NextLink href={{ query: { page: maxPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={BiArrowToRight}
            />
          </NextLink>
        </Flex>
      </Flex>
      <Flex>
        <Icon
          cursor="pointer"
          color={props.listType === 'grid' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          mr="10px"
          onClick={() => {
            props.setListType('grid')
          }}
          as={BsFillGridFill}
        />
        <Icon
          cursor="pointer"
          color={props.listType === 'list' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          onClick={() => {
            props.setListType('list')
          }}
          as={FaThList}
        />
      </Flex>
    </Flex>
  )
}
