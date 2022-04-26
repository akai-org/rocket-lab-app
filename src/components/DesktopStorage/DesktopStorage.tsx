import { Flex } from '@chakra-ui/react'
import Filters from './Filters/Filters'
import DesktopItemsList from './DesktopItemsList/DesktopItemsList'
import StorageSidebar from './StorageSidebar/StorageSidebar'
import { ItemProps } from '../../utils/types/ItemProps'

interface Props {
  items: ItemProps[]
}

const DesktopStorage = ({ items }: Props) => {
  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="80px auto 0 auto">
      <StorageSidebar />
      <Flex w="95%" flexDirection="column" p="40px">
        <Filters />
        <DesktopItemsList items={items} />
      </Flex>
    </Flex>
  )
}

export default DesktopStorage
