import { useMediaQuery } from '@chakra-ui/react'
import DesktopNavigation from './Navigation/DesktopNavigation/DesktopNavigation'
import MobileNavigation from './Navigation/MobileNavigation/MobileNavigation'
import Footer from './/Footer/Footer'
import { ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

const Layout = ({ children }: Props) => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  return (
    <>
      {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
      {children}
      <Footer />
    </>
  )
}

export default Layout
