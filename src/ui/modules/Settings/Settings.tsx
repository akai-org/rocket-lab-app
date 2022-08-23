import {
  DesktopWrapper,
  SearchSelect,
  ProductButton,
  MobileWrapper,
  RoleBadge,
  ColorModeSwitch,
} from 'ui/components'
import { Avatar, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { useState } from 'react'
import { Role } from 'utils/types/frontendGeneral'
import { useColors } from 'ui/theme'

export const Settings = () => {
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const [selectedUser, setSelectedUser] = useState({ value: '', label: '' })
  const [selectedRole, setSelectedRole] = useState({})

  const Wrapper = isDesktop ? DesktopWrapper : MobileWrapper

  const mockUsersOptions = [
    { value: 'Patryk Marczak', label: 'Patryk Marczak', role: 'ADMIN' },
    { value: 'Alan Gradecki', label: 'Alan Gradecki', role: 'EDITOR' },
    { value: 'Kacper Nowaczyk', label: 'Kacper Nowaczyk', role: 'READER' },
  ]
  const mockRolesOptions = [
    { value: 'ADMIN', label: 'ADMIN' },
    { value: 'EDITOR', label: 'EDITOR' },
    { value: 'READER', label: 'READER' },
  ]

  const handleClear = () => {
    setSelectedRole({})
    setSelectedUser({ value: '', label: '' })
  }

  const colors = useColors()

  return (
    <Wrapper width={['95%', '100%']} mx="auto">
      <Flex
        borderRadius="6px"
        p="15px"
        mt={['10px', 0]}
        color={colors.fontSecondary}
        border={`1px solid ${colors.borderPrimary}`}
        flexDirection="column"
      >
        <Flex>
          <Avatar size="sm" />
          <Text
            noOfLines={1}
            fontSize="md"
            lineHeight="30px"
            pl="10px"
            fontWeight="bold"
          >
            Imię Nazwisko
          </Text>
          <RoleBadge
            ml="10px"
            lineHeight="16px"
            height="25px"
            my="auto"
            p="5px"
            role="ADMIN"
          />
        </Flex>
        <Flex justifyContent="space-between" mt="10px">
          <Text noOfLines={1} fontWeight="normal">
            Motyw:
          </Text>
          <ColorModeSwitch />
        </Flex>
        <Flex flexDirection="column" mt="10px">
          <Text noOfLines={1} fontWeight="normal">
            Edycja ról:
          </Text>
          <Text noOfLines={1}>Wybierz użytkownika:</Text>
          <SearchSelect
            value={selectedUser}
            onChange={(e) => {
              const b = e as { value: string; label: string; role: Role }
              setSelectedUser({ ...b })
              setSelectedRole({ value: b.role, label: b.role })
            }}
            options={mockUsersOptions}
          />
          {selectedUser.label && (
            <Flex flexDirection="column">
              <Text>{'Użytkownik: ' + selectedUser.label}</Text>
              <Text>{'Email: ' + 'replaceme@gmail.com'}</Text>
              <Text>
                Rola:
                <SearchSelect
                  value={selectedRole}
                  onChange={(e) => {
                    const b = e as { value: string; label: string }
                    setSelectedRole({ ...b })
                  }}
                  options={mockRolesOptions}
                />
              </Text>
              <Flex justifyContent="flex-end" gap="10px" mt="15px">
                <ProductButton fontSize="sm" w="70px">
                  Zapisz
                </ProductButton>
                <ProductButton onClick={handleClear} fontSize="sm" w="70px">
                  Anuluj
                </ProductButton>
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Wrapper>
  )
}
