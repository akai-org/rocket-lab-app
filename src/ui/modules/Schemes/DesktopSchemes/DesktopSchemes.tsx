import { Flex } from '@chakra-ui/react'
import AddScheme from './AddScheme/AddScheme'
import Scheme from './Scheme/Scheme'
import DesktopWrapper from '../../../components/Wrappers/DesktopWrapper/DesktopWrapper'
import { useSelector } from 'react-redux'
import { schemeInfo } from '../../../../store/store'

export const DesktopSchemes = () => {
  const schemeData = useSelector(schemeInfo)
  return (
    <DesktopWrapper>
      <Flex w="100%" flexDirection="column">
        <AddScheme />
        {schemeData.schemas.map((schema) => (
          <Scheme schema={schema} key={schema.id} />
        ))}
      </Flex>
    </DesktopWrapper>
  )
}
