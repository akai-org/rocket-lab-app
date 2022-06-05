import { useRef } from 'react'
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Text,
  useDisclosure,
} from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Hamburger from 'hamburger-react'
import { FiSettings } from 'react-icons/fi'
import { AiOutlineTool } from 'react-icons/ai'
import { BsCardChecklist } from 'react-icons/bs'
import { RiDraftLine, RiHistoryLine } from 'react-icons/ri'
import { GrLogout } from 'react-icons/gr'
import { IS_DEV } from '../../../../utils/constants'

const MobileSidebar = () => {
  const router = useRouter()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef(null)

  return (
    <>
      <Box ref={btnRef} onClick={onOpen}>
        <Hamburger size={30} toggled={isOpen} />
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay bgColor="transparent" />
        <DrawerContent mt="76px">
          <DrawerBody w="100%">
            <Flex
              flexDirection="column"
              onClick={onClose}
              fontSize="22px"
              rowGap={10}
              p="20px"
            >
              <Flex
                lineHeight="30px"
                onClick={() => {
                  if (router.asPath !== '/') router.push('/')
                }}
                mt="10px"
              >
                <AiOutlineTool size={30} />
                <Text ml="10px">Magazyn</Text>
              </Flex>
              <Flex
                lineHeight="30px"
                onClick={() => {
                  if (router.asPath !== '/list') router.push('/list')
                }}
              >
                <BsCardChecklist size={30} />
                <Text ml="10px">Listy</Text>
              </Flex>
              {IS_DEV && (
                <>
                  <Flex lineHeight="30px">
                    <RiHistoryLine size={30} />
                    <Text ml="10px">Historia</Text>
                  </Flex>
                  <Flex lineHeight="30px">
                    <RiDraftLine size={30} />
                    <Text ml="10px">Szablony</Text>
                  </Flex>
                  <Flex lineHeight="30px">
                    <FiSettings size={30} />
                    <Text ml="10px">Ustawienia</Text>
                  </Flex>
                </>
              )}
              <Flex
                lineHeight="30px"
                onClick={() => {
                  router.push('/api/auth/logout')
                }}
              >
                <GrLogout size={30} />
                <Text ml="10px">Wyloguj</Text>
              </Flex>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}

export default MobileSidebar
