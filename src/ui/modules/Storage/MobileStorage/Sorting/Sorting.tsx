import React from 'react'
import { BsFillGridFill } from 'react-icons/bs'
import { FaThList } from 'react-icons/fa'
import { Flex, ButtonGroup, Icon } from '@chakra-ui/react'
import { sortingType } from 'utils/types/frontendGeneral'
import { SortingGeneral } from 'ui/components'
import { useColors } from 'ui/theme'

export const Sorting: React.FC<{
  setListType: (type: sortingType) => void
  listType: sortingType
}> = (props) => {
  const colors = useColors()

  return (
    <Flex
      justifyContent="space-between"
      w="100%"
      minW="300px"
      mt="5px"
      mb="20px"
      p="0 10px"
    >
      <Flex flexDirection="row">
        <SortingGeneral />
      </Flex>

      <ButtonGroup variant="outline" lineHeight="50px">
        <Icon
          mr="10px"
          color={
            props.listType === 'grid'
              ? colors.fontSecondary
              : colors.fontNeutral
          }
          fontSize="lg"
          onClick={() => {
            props.setListType('grid')
          }}
          as={BsFillGridFill}
        />
        <Icon
          mr="10px"
          color={
            props.listType === 'list'
              ? colors.fontSecondary
              : colors.fontNeutral
          }
          fontSize="lg"
          onClick={() => {
            props.setListType('list')
          }}
          as={FaThList}
        />
      </ButtonGroup>
    </Flex>
  )
}
