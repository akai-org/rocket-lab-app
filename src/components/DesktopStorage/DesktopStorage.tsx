import { Flex } from '@chakra-ui/react'
import Filters from './Filters/Filters'
import DesktopItemsList from './DesktopItemsList/DesktopItemsList'
import { ItemProps } from '../../utils/types/frontendGeneral'
import DesktopSidebar from '../Navigation/DesktopSidebar/DesktopSidebar'

interface Props {
  items: ItemProps[]
}

const DesktopStorage = ({ items }: Props) => {
  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="75px auto 0 auto">
      <DesktopSidebar />
      <Flex w="95%" flexDirection="column" p="40px">
        <Filters />
        <DesktopItemsList items={items} />
      </Flex>
    </Flex>
  )
}

export default DesktopStorage
