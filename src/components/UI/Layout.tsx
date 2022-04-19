import { useMediaQuery } from '@chakra-ui/react'
import DesktopNavigation from '../Navigation/DesktopNavigation'
import MobileNavigation from '../Navigation/MobileNavigation'

const Layout = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')

  return <>{isDesktop ? <DesktopNavigation /> : <MobileNavigation />}</>
}

export default Layout
