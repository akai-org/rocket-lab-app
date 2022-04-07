import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode, useEffect } from 'react'

interface Props {
  children?: ReactNode
}

export const RouteGuard: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter()
  const { user } = useUser()

  useEffect(() => {
    const protectedRouter = ['/management']

    if (typeof window !== 'undefined') {
      if (protectedRouter.includes(router.asPath) && !user) {
        router.replace('/')
      }
    }
  })

  return <>{children}</>
}
