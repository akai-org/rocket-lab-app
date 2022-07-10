import DesktopWrapper from '../UI/Wrappers/DesktopWrapper/DesktopWrapper'
import { Avatar, Flex, Switch, Text, useMediaQuery } from '@chakra-ui/react'
import SearchSchemeSelect from '../UI/SearchSchemeSelect/SearchSchemeSelect'
import { useState } from 'react'
import ProductButton from '../UI/Custom Buttons/ProductButton/ProductButton'
import MobileWrapper from '../UI/Wrappers/MobileWrapper/MobileWrapper'
import RoleBadge from '../UI/Badges/RoleBadge'
import { Role } from '../../utils/types/frontendGeneral'

const Settings = () => {
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

  return (
    <Wrapper width={['95%', '100%']} mx={['auto', 0]}>
      <Flex
        borderRadius="6px"
        p="15px"
        mt={['10px', 0]}
        color="#4A5568"
        border="1px solid #C4C4C4"
        flexDirection="column"
      >
        <Flex>
          <Avatar size="sm" />
          <Text
            noOfLines={1}
            fontSize="18px"
            lineHeight="30px"
            pl="10px"
            fontWeight="600"
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
          <Text noOfLines={1} fontWeight={500}>
            Ciemny motyw:
          </Text>
          <Switch my="auto" />
        </Flex>
        <Flex flexDirection="column" mt="10px">
          <Text noOfLines={1} fontWeight={500}>
            Edycja ról:
          </Text>
          <Text noOfLines={1}>Wybierz użytkownika:</Text>
          <SearchSchemeSelect
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
                <SearchSchemeSelect
                  value={selectedRole}
                  onChange={(e) => {
                    const b = e as { value: string; label: string }
                    setSelectedRole({ ...b })
                  }}
                  options={mockRolesOptions}
                />
              </Text>
              <Flex justifyContent="flex-end" gap="10px" mt="15px">
                <ProductButton fontSize="16px" w="70px">
                  Zapisz
                </ProductButton>
                <ProductButton onClick={handleClear} fontSize="16px" w="70px">
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

export default Settings
