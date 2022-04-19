import { Box, Flex } from '@chakra-ui/react'
import Filters from './Filters/Filters'
import DesktopItemsList from './DesktopItemsList/DesktopItemsList'
import StorageSidebar from './StorageSidebar/StorageSidebar'


const DesktopStorage = () => {
  return (
    <Flex maxW="2000px" flexDirection="row" w="100vw" m="100px auto 0 auto">
      <StorageSidebar />
      <Flex flexDirection="column" w="95%" p="40px">
        <Filters />
        <DesktopItemsList />
      </Flex>
    </Flex>
  )
}

export default DesktopStorage
