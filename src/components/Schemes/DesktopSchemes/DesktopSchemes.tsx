import { Flex } from '@chakra-ui/react'
import AddScheme from './AddScheme/AddScheme'
import Scheme from './Scheme/Scheme'
import DesktopWrapper from '../../UI/Wrappers/DesktopWrapper/DesktopWrapper'
import { useSelector } from 'react-redux'
import { schemeInfo } from '../../../store/store'

const DesktopSchemes = () => {
  const schemeData = useSelector(schemeInfo)
  return (
    <DesktopWrapper>
      <Flex w="100%" flexDirection="column" ml="223px" p="40px">
        <AddScheme />
        {schemeData.schemas.map((schema) => (
          <Scheme schema={schema} key={schema.id} />
        ))}
      </Flex>
    </DesktopWrapper>
  )
}

export default DesktopSchemes
