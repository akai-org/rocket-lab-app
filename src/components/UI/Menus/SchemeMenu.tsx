import { Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import DeletePopover from '../Popovers/DeletePopover'

export interface SchemeMenuProps {
  onDelete: () => void
  onOpenInfo: () => void
}

const SchemeMenu = (props: SchemeMenuProps) => {
  return (
    <Menu closeOnSelect={false}>
      <MenuButton>
        <Flex
          mb="5px"
          ml="5px"
          w="20px"
          textAlign="center"
          justifyContent="center"
        >
          <BsThreeDotsVertical />
        </Flex>
      </MenuButton>
      <MenuList maxW="50px">
        <MenuItem onClick={props.onOpenInfo} closeOnSelect>
          Więcej
        </MenuItem>
        <MenuItem>
          <DeletePopover
            label="Czy na pewno chcesz usunąć ten schemat?"
            onClick={props.onDelete}
            styles={false}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default SchemeMenu
