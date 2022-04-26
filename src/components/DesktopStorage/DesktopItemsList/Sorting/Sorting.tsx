import { Box, Flex, Icon, Select, Text } from '@chakra-ui/react'
import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { sortingType } from '../DesktopItemsList'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BiArrowToLeft, BiArrowToRight } from 'react-icons/bi'

const Sorting: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
}> = (props) => {
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
          <Select color="black" variant="flushed" h="25px" w="80px">
            <option value="option1">1</option>
            <option value="option2">2</option>
            <option value="option3">3</option>
          </Select>
        </Flex>
        <Text m="0 40px">1 - 5 of 20</Text>
        <Flex fontSize="20px" w="120px" justifyContent="space-around">
          <Icon
            cursor="pointer"
            _hover={{
              color: 'black',
            }}
            as={BiArrowToLeft}
          />
          <Icon
            cursor="pointer"
            _hover={{
              color: 'black',
            }}
            as={IoIosArrowBack}
          />

          <Icon
            cursor="pointer"
            _hover={{
              color: 'black',
            }}
            as={IoIosArrowForward}
          />

          <Icon
            cursor="pointer"
            _hover={{
              color: 'black',
            }}
            as={BiArrowToRight}
          />
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

export default Sorting
