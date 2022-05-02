import { Flex } from '@chakra-ui/react'
import Filters from './Filters/Filters'
import DesktopItemsList from './DesktopItemsList/DesktopItemsList'
import StorageSidebar from './StorageSidebar/StorageSidebar'
import { MainViewProps } from '../../utils/types/frontendGeneral'

const DesktopStorage = ({ items, itemsCount }: MainViewProps) => {
  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="80px auto 0 auto">
      <StorageSidebar />
      <Flex w="95%" flexDirection="column" p="40px">
        <Filters />
        <DesktopItemsList itemsCount={itemsCount} items={items} />
      </Flex>
    </Flex>
  )
}

export default DesktopStorage
