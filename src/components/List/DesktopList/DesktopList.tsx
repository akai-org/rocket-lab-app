import { Flex, useToast } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import { fetcher } from '../../../utils/requests'
import AddItem from './AddItem/AddItem'
import List from './List/List'

const DesktopList = () => {
  const [lists, setLists] = useState([])

  useEffect(() => {
    fetcher('http://localhost:3000/api/cart', { method: 'GET' })
      .then((data) => {
        console.log(data)
        setLists(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="75px auto 0 auto">
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        <AddItem />
        {lists.map((list) => (
          <List {...list} key={list} />
        ))}
      </Flex>
    </Flex>
  )
}

export default DesktopList
