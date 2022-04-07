import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { Flex, Select, Text, ButtonGroup, Icon } from '@chakra-ui/react'

const Sorting: React.FC<{
  setListType: (type: string) => void
  listType: string
}> = (props) => {
  return (
    <Flex
      w="100%"
      color="#D5D5D5"
      mt="5px"
      mb="20px"
      p="0 10px"
      justifyContent="space-between"
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
          fontSize="20px"
          mr="10px"
          color={props.listType === 'grid' ? 'black' : '#C4C4C4'}
          onClick={() => {
            props.setListType('grid')
          }}
          as={BsFillGridFill}
        />
        <Icon
          fontSize="20px"
          mr="10px"
          color={props.listType === 'list' ? 'black' : '#C4C4C4'}
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
