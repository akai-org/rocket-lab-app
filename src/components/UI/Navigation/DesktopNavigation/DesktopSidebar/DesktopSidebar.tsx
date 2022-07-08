import { useRouter } from 'next/router'
import { IS_DEV } from '../../../../../utils/constants'
import { Flex, Text } from '@chakra-ui/react'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineTool } from 'react-icons/ai'
import { BsCardChecklist } from 'react-icons/bs'
import { RiDraftLine, RiHistoryLine } from 'react-icons/ri'
import { GrLogout } from 'react-icons/gr'
import s from './sidebar.module.scss'

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
      bgColor="white"
      maxH="calc(100vh - 80px)"
      boxShadow="0 0 10px 0.2px #DDDDDD"
      zIndex="1"
    >
      <Flex
        flexDirection="column"
        className={s.underline}
        fontSize="18px"
        rowGap={6}
        p="20px 30px"
      >
        <Flex
          lineHeight="25px"
          w="85%"
          onClick={() => {
            if (router.asPath !== '/') router.push('/')
          }}
          mt="10px"
        >
          <AiOutlineTool size={25} />
          <Text ml="10px">Magazyn</Text>
        </Flex>
        <Flex
          lineHeight="25px"
          w="85%"
          onClick={() => {
            if (router.asPath !== '/list') router.push('/list')
          }}
        >
          <BsCardChecklist size={25} />
          <Text ml="10px">Listy</Text>
        </Flex>
        {IS_DEV && (
          <>
            <Flex
              lineHeight="25px"
              w="85%"
              onClick={() => {
                if (router.asPath !== '/history') router.push('/history')
              }}
            >
              <RiHistoryLine size={25} />
              <Text ml="10px">Historia</Text>
            </Flex>
            <Flex
              lineHeight="25px"
              w="85%"
              onClick={() => {
                if (router.asPath !== '/schemes') router.push('/schemes')
              }}
            >
              <RiDraftLine size={25} />
              <Text ml="10px">Schematy</Text>
            </Flex>
            <Flex
              lineHeight="25px"
              w="85%"
              onClick={() => {
                if (router.asPath !== '/settings') router.push('/settings')
              }}
            >
              <FiSettings size={25} />
              <Text ml="10px">Ustawienia</Text>
            </Flex>
          </>
        )}
        <Flex
          lineHeight="25px"
          onClick={() => {
            router.push('/api/auth/logout')
          }}
          w="85%"
        >
          <GrLogout size={25} />
          <Text ml="10px">Wyloguj</Text>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DesktopSidebar
