import {
  DesktopWrapper,
  SearchSelect,
  ProductButton,
  MobileWrapper,
  RoleBadge,
  ColorModeSwitch,
  DeletePopover,
} from 'ui/components'
import { Avatar, Flex, Text, useMediaQuery } from '@chakra-ui/react'
import { useState, memo, useEffect } from 'react'
import { useColors } from 'ui/theme'
import { useDispatch, useSelector } from 'react-redux'
import { usersInfo } from 'store'
import { User } from 'mongo'
import { deleteUser, setUsers } from 'store/Slices/usersSlice'
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

  const prepareSelectableUsers = () =>
    users.map((user) => ({
      value: user.id,
      label: user.name,
      id: user.id,
      role: { value: user.role, label: user.role },
      email: user.email,
      name: user.name,
    }))

  const [selectableUsers, setSelectableUsers] = useState<SelectableUser[]>(
    prepareSelectableUsers
  )

  const [selectedUser, setSelectedUser] = useState<SelectableUser>(
    selectableUsers[0]
  )

  useEffect(() => {
    setSelectableUsers(prepareSelectableUsers)
  }, [users])

  useEffect(() => {
    setSelectedUser(selectableUsers[0])
  }, [selectableUsers])

  const Wrapper = isDesktop ? DesktopWrapper : MobileWrapper

  const rolesOptions: SelectableRole[] = [
    { value: 'admin', label: 'admin' },
    { value: 'editor', label: 'editor' },
    { value: 'reader', label: 'reader' },
  ]

  const handleClear = () => {
    setSelectableUsers(prepareSelectableUsers())
    setSelectedUser(selectableUsers[0])

    setChangedUsers([])
  }

  const onSave = async () => {
    try {
      const updatedUsers = await fetcher(API_URL + '/api/users/update', {
        method: 'PUT',
        body: {
          users: changedUsers,
        },
      })
      dispatch(setUsers(updatedUsers))
      setSelectedUser(selectableUsers[0])
      setChangedUsers([])
    } catch (e) {
      console.log(e)
    }
  }

  const deleteUserLocal = async () => {
    try {
      const deletedUser = await fetcher(API_URL + '/api/users/delete', {
        method: 'DELETE',
        body: { userId: selectedUser.id },
      })
      dispatch(deleteUser(deletedUser))
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
            }}
            options={selectableUsers}
          />
          {selectedUser?.name && (
            <Flex flexDirection="column">
              <Text>{'Użytkownik: ' + selectedUser.name}</Text>
              <Text>{'Email: ' + selectedUser.email}</Text>
              <Text>
                Rola:
                <SearchSelect
                  value={
                    selectableUsers.find(
                      (user) => user.name === selectedUser.name
                    )?.role
                  }
                  onChange={(e) => {
                    const role = e as SelectableRole
                    setSelectableUsers((selectables) => {
                      const copy = [...selectables]
                      const changedUserIndex = copy.findIndex(
                        (user) => user.name === selectedUser.name
                      )
                      const userCopy = { ...copy[changedUserIndex] }
                      userCopy.role = role
                      copy.splice(changedUserIndex, 1, userCopy)
                      return copy
                    })
                    setChangedUsers((changedUsers) => {
                      const userIndex = changedUsers.findIndex(
                        (user) => user.id === selectedUser.id
                      )

                      if (userIndex !== -1) {
                        const copyUser = { ...changedUsers[userIndex] }
                        copyUser.role = role.value
                        const copyUsers = [...changedUsers]
                        copyUsers.splice(userIndex, 1, copyUser)
                        return copyUsers
                      } else {
                        const copyUser = {
                          ...(users.find(
                            (user) => user.name === selectedUser.name
                          ) as User),
                        }
                        copyUser.role = role.value
                        return [...changedUsers, copyUser]
                      }
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
                <DeletePopover
                  label="Czy na pewno chcesz usunąć tego użytkownika?"
                  onClick={deleteUserLocal}
                />
              </Flex>
            </Flex>
          )}
        </Flex>
      </Flex>
    </Wrapper>
  )
})
