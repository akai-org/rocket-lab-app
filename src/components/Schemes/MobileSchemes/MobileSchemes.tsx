import AddScheme from './AddScheme/AddScheme'
import MobileWrapper from '../../UI/Wrappers/MobileWrapper/MobileWrapper'
import Scheme from './Scheme/Scheme'

const MobileSchemes = () => {
  return (
    <MobileWrapper pb="150px" mx="10px">
      <AddScheme />
      <Scheme />
    </MobileWrapper>
  )
}

export default MobileSchemes
