import { useMediaQuery } from '@chakra-ui/react'
import DesktopNavigation from './Navigation/DesktopNavigation/DesktopNavigation'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'
import Footer from '../UI/Footer/Footer'
import { ReactNode, FunctionComponent } from 'react'

interface Props {
  children?: ReactNode
}

const Layout: FunctionComponent<Props> = ({ children }) => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  return (
    <>
      {isDesktop ? (
        <>
          <DesktopNavigation />
          {children}
          <Footer />
        </>
      ) : (
        <>
          <MobileNavigation />
          {children}
          <Footer />
        </>
      )}
    </>
  )
}

export default Layout
