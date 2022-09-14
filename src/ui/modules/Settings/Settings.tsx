import {
  DesktopWrapper,
  SearchSelect,
  ProductButton,
  MobileWrapper,
  RoleBadge,
  ColorModeSwitch,
} from 'ui/components'
import { Avatar, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { useState, memo } from 'react'
import { useColors } from 'ui/theme'
import { useDispatch, useSelector } from 'react-redux'
import { usersInfo } from 'store'
import { User } from 'mongo'
import { setUsers } from 'store/Slices/usersSlice'
import { adminRoles } from 'utils/types/backendGeneral'
import { fetcher } from 'utils/requests'
import { API_URL } from 'utils/constants'

interface SelectableRole {
  value: adminRoles
  label: adminRoles
}

interface SelectableUser extends Omit<User, '_id' | 'role'> {
  value: string
  label: string
  role: SelectableRole
}

export const Settings = memo(function Settings() {
  const dispatch = useDispatch()
  const [isDesktop] = useMediaQuery('(min-width: 900px)')

  const [changedUsers, setChangedUsers] = useState<User[]>([])

  const users = useSelector(usersInfo).users

  const selectableUsers = users.map((user) => ({
    value: user.id,
    label: user.name,
    id: user.id,
    role: { value: user.role, label: user.role },
    email: user.email,
    name: user.name,
  }))

  const [selectedUser, setSelectedUser] = useState<SelectableUser>(
    () => selectableUsers[0]
  )
  const [selectedRole, setSelectedRole] = useState<SelectableRole>(
    () => selectableUsers[0].role
  )

  const Wrapper = isDesktop ? DesktopWrapper : MobileWrapper

  const rolesOptions: SelectableRole[] = [
    { value: 'admin', label: 'admin' },
    { value: 'editor', label: 'editor' },
    { value: 'reader', label: 'reader' },
  ]

  const handleClear = () => {
    setSelectedRole({})
    setSelectedUser({ value: '', label: '' })
  }

  const onSave = async () => {
    console.log('onSave called')
    try {
      const updatedUsers = await fetcher(API_URL + '/api/users/update', {
        method: 'PUT',
        body: {
          users: changedUsers,
        },
      })
      dispatch(setUsers(updatedUsers))
    } catch (e) {
      console.log(e)
    }
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
              const user = e as SelectableUser
              setSelectedUser(user)
              setSelectedRole(user.role)
            }}
            options={selectableUsers}
          />
          {selectedUser.name && (
            <Flex flexDirection="column">
              <Text>{'Użytkownik: ' + selectedUser.name}</Text>
              <Text>{'Email: ' + selectedUser.email}</Text>
              <Text>
                Rola:
                <SearchSelect
                  value={selectedRole}
                  onChange={(e) => {
                    const role = e as SelectableRole
                    setSelectedRole(role)
                    setChangedUsers((changedUsers) => {
                      const dbUser = {
                        ...(users.find(
                          (user) => user.id === selectedUser.id
                        ) as User),
                      }
                      dbUser.role = role.value
                      return [...changedUsers, dbUser]
                    })
                  }}
                  options={rolesOptions}
                />
              </Text>
              <Flex justifyContent="flex-end" gap="10px" mt="15px">
                <ProductButton onClick={onSave} fontSize="sm" w="70px">
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
})
