import { useMediaQuery } from '@chakra-ui/react'
import { Footer, MobileNavigation, DesktopNavigation } from 'ui/components'
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
