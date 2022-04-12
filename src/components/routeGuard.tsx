import { useUser } from '@auth0/nextjs-auth0'
import { useRouter } from 'next/router'
import { FunctionComponent, ReactNode, useEffect } from 'react'
import { Text } from '@chakra-ui/react'

interface Props {
  children?: ReactNode
}

export const RouteGuard: FunctionComponent<Props> = ({ children }) => {
  const router = useRouter()
  const { user, isLoading, error } = useUser()

  useEffect(() => {
    const protectedRouter = ['/management', '/loggedin']

    if (typeof window !== 'undefined') {
      if (protectedRouter.includes(router.asPath.toLowerCase()) && !user) {
        router.replace('/')
      }
    }
  })

  if (isLoading) {
    return <Text>Loading</Text>
  }
  if (error) {
    return <Text>Error occured</Text>
  }

  return <>{children}</>
}
