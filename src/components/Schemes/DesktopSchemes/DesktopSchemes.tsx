import { Flex } from '@chakra-ui/react'
import AddScheme from './AddScheme/AddScheme'
import Scheme from './Scheme/Scheme'
import DesktopWrapper from '../../UI/Wrappers/DesktopWrapper/DesktopWrapper'

const DesktopSchemes = () => {
  return (
    <DesktopWrapper>
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        <AddScheme />
        <Scheme />
      </Flex>
    </DesktopWrapper>
  )
}

export default DesktopSchemes
