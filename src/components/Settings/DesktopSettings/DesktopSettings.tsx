import DesktopWrapper from '../../UI/Wrappers/DesktopWrapper/DesktopWrapper'
import { Avatar, Badge, Box, Flex, Switch, Text } from '@chakra-ui/react'
import SearchSchemeSelect from '../../UI/SearchSchemeSelect/SearchSchemeSelect'
import { useState } from 'react'
import ProductButton from '../../UI/Custom Buttons/ProductButton/ProductButton'

const DesktopSettings = () => {
  const [selectedUser, setSelectedUser] = useState({})
  const [selectedRole, setSelectedRole] = useState({})
  const mockUsersOptions = [
    { value: 'a', label: 'Patryk Marczak', role: 'ADMIN' },
    { value: 'b', label: 'Alan Gradecki', role: 'EDITOR' },
    { value: 'c', label: 'Kacper Nowaczyk', role: 'READER' },
  ]
  const mockRolesOptions = [
    { value: '3', label: 'ADMIN' },
    { value: '2', label: 'EDITOR' },
    { value: '1', label: 'READER' },
  ]
  return (
    <DesktopWrapper>
      <Flex
        borderRadius="6px"
        p="15px"
        color="#4A5568"
        border="1px solid #C4C4C4"
        flexDirection="column"
      >
        <Flex>
          <Avatar size="sm" />
          <Text fontSize="18px" lineHeight="30px" pl="10px" fontWeight="600">
            Imię Nazwisko
          </Text>
          <Badge>ADMIN/EDITOR/READER</Badge>
        </Flex>
        <Flex justifyContent="space-between">
          <Text>Motyw</Text>
          <Switch />
        </Flex>
        <Flex flexDirection="column">
          <Text>Edycja ról</Text>
          <Text>Wybierz użytkownika:</Text>
          <SearchSchemeSelect
            // value={selectedUser}
            onChange={(e) => {
              const b = e as { value: string; label: string }
              setSelectedUser({ ...b })
            }}
            options={mockUsersOptions}
          />
          {selectedUser && (
            <Flex flexDirection="column">
              <Text>Użytkownik: {selectedUser}</Text>
              <Text>Email: pussydestroyer@gmail.com</Text>
              <Text>
                Rola:
                <SearchSchemeSelect
                  // value={selectedRole}
                  onChange={(e) => {
                    const b = e as { value: string; label: string }
                    setSelectedRole({ ...b })
                  }}
                  options={mockRolesOptions}
                />
              </Text>
              <ProductButton fontSize="16px" w="70px">
                Zapisz
              </ProductButton>
            </Flex>
          )}
        </Flex>
      </Flex>
    </DesktopWrapper>
  )
}

export default DesktopSettings
