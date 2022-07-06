import { Flex } from '@chakra-ui/react'
import AddScheme from './AddScheme/AddScheme'
import Scheme from './Scheme/Scheme'
import DesktopWrapper from '../../UI/Wrappers/DesktopWrapper/DesktopWrapper'

const DesktopSchemes = () => {
  return (
    <DesktopWrapper>
      <AddScheme />
      <Scheme />
    </DesktopWrapper>
  )
}

export default DesktopSchemes
