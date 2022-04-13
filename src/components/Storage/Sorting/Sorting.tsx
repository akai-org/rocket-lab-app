import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { Flex, Select, Text, ButtonGroup, Icon } from '@chakra-ui/react'
import { sortingType } from '../ItemsList/ItemsList'

const Sorting: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
}> = (props) => {
  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      minW="300px"
      mt="80px"
      mb="20px"
      p="0 10px"
      color="#D5D5D5"
    >
      <Flex flexDirection="row">
        <Text>sortuj po:</Text>
        <Select variant="unstyled" w="130px" ml="10px" color="black">
          <option value="newest">najnowsze</option>
          <option value="oldest">najstarsze</option>
          <option value="alphabetically">alfabetycznie</option>
        </Select>
      </Flex>

      <ButtonGroup variant="outline" lineHeight="50px">
        <Icon
          mr="10px"
          color={props.listType === 'grid' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          onClick={() => {
            props.setListType('grid')
          }}
          as={BsFillGridFill}
        />
        <Icon
          mr="10px"
          color={props.listType === 'list' ? 'black' : '#C4C4C4'}
          fontSize="20px"
          onClick={() => {
            props.setListType('list')
          }}
          as={FaThList}
        />
      </ButtonGroup>
    </Flex>
  )
}

export default Sorting
