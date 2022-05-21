import { Flex } from '@chakra-ui/react'
import FiltersControlls from './Filters/Filters'
import DesktopItemsList from './DesktopItemsList/DesktopItemsList'
import { MainViewProps } from '../../../utils/types/frontendGeneral'
import FiltersGeneral from '../../UI/FiltersGeneral/FiltersGeneral'

const DesktopStorage = ({ items, itemsCount }: MainViewProps) => {
  return (
    <Flex flexDirection="row" w="100vw" maxW="2000px" m="75px auto 0 auto">
      <Flex w="95%" flexDirection="column" ml="223px" p="40px">
        <FiltersGeneral>
          {(props) => <FiltersControlls {...props} />}
        </FiltersGeneral>
        <DesktopItemsList itemsCount={itemsCount} items={items} />
      </Flex>
    </Flex>
  )
}

export default DesktopStorage
