import { Flex } from '@chakra-ui/react'
import AddScheme from './AddScheme/AddScheme'
import Scheme from './Scheme/Scheme'

const DesktopSchemes = () => {
  return (
    <Flex
      flexDirection="row"
      w="100vw"
      pb="150px"
      maxW="2000px"
      m="75px auto 0 auto"
    >
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        <AddScheme />
        <Scheme />
      </Flex>
    </Flex>
  )
}

export default DesktopSchemes
