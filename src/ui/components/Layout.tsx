import { useMediaQuery } from '@chakra-ui/react'
import { DesktopNavigation } from './Navigation/DesktopNavigation/DesktopNavigation'
import { MobileNavigation } from './Navigation/MobileNavigation/MobileNavigation'
import { Footer } from './/Footer/Footer'
import { memo, ReactNode } from 'react'

interface Props {
  children?: ReactNode
}

export const Layout = memo(({ children }: Props) => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  return (
    <>
      {isDesktop ? <DesktopNavigation /> : <MobileNavigation />}
      {children}
      <Footer />
    </>
  )
})
