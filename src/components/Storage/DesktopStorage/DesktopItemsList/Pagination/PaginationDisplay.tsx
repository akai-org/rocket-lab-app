import { Flex, Select, Icon, Text } from '@chakra-ui/react'
import Link from 'next/link'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { PaginationSettings } from '../../../../UI/PaginationGeneral/PaginationGeneral'

export const SortingMechanism: React.FC<PaginationSettings> = ({
  handleOnChangeQuantity,
  maxPage,
  minPage,
  nextPage,
  previousPage,
  toDisplay,
  itemsCount,
}) => {
  console.log(previousPage)
  const rangeBeginning = previousPage * toDisplay

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
            onChange={handleOnChangeQuantity}
            color="black"
            variant="flushed"
            h="25px"
            w="80px"
          >
            <option value="15">15</option>
            <option value="45">45</option>
            <option value="117">117</option>
          </Select>
        </Flex>
        <Text m="0 40px">
          {rangeBeginning} - 5 of {itemsCount}
        </Text>
        <Flex fontSize="20px" w="120px" justifyContent="space-around">
          <Link href={{ query: { page: minPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={BiArrowToLeft}
            />
          </Link>
          <Link href={{ query: { page: previousPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={IoIosArrowBack}
            />
          </Link>

          <Link href={{ query: { page: nextPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={IoIosArrowForward}
            />
          </Link>

          <Link href={{ query: { page: maxPage, toDisplay } }} passHref>
            <Icon
              cursor="pointer"
              _hover={{
                color: 'black',
              }}
              as={BiArrowToRight}
            />
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
