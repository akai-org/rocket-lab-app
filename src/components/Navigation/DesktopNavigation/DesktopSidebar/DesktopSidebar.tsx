import { Button, Flex, Icon, Text, Link } from '@chakra-ui/react'
import { IoIosSettings } from 'react-icons/io'
import NavButton from '../../../UI/Custom Buttons/NavButton/NavButton'
import { useRouter } from 'next/router'
import { IS_DEV } from '../../../../utils/constants'

const DesktopSidebar = () => {
  const router = useRouter()
  return (
    <Flex
      position="absolute"
      left="0"
      top="0"
      flexDirection="column"
      w="223px"
      h="100vh"
      mt="75px"
      m={''}
      bgColor="white"
      maxH="calc(100vh - 80px)"
      boxShadow="0 0 10px 0.2px #DDDDDD"
      zIndex="1"
    >
      <Flex flexDirection="column" w="100%" alignItems="center">
        <NavButton
          isItemActive={router.asPath === '/'}
          onClick={() => {
            router.push('/')
          }}
          mt="20px"
          w="80%"
        >
          Magazyn
        </NavButton>
        <NavButton
          isItemActive={router.asPath === '/list'}
          onClick={() => {
            router.push('/list')
          }}
          w="80%"
        >
          Lista Zakupów
        </NavButton>
        {IS_DEV && (
          <>
            <NavButton isItemActive={router.asPath === '/history'} w="80%">
              Historia
            </NavButton>
            <NavButton isItemActive={router.asPath === '/schemes'} w="80%">
              Schematy
            </NavButton>
          </>
        )}
      </Flex>
      <Flex flexDirection="column" mt="auto" ml="20px">
        {IS_DEV && (
          <Flex justifyContent="flex-start">
            <Icon as={IoIosSettings} mr="10px" fontSize="22px" />
            <Text>Ustawienia</Text>
          </Flex>
        )}
        <Link m="10px auto 20px 0" href="/api/auth/logout">
          <Button h="32px" w="120px" bgColor="#FF7700" color="white">
            Logout
          </Button>
        </Link>
      </Flex>
    </Flex>
  )
}

export default DesktopSidebar
