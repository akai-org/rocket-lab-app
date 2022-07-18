import { Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import DeletePopover from '../Popovers/DeletePopover'
import { useColors } from '../../../theme/useColors'

export interface ListMenuProps {
  onDelete: () => void
  onEdit: () => void
}

const ListMenu = (props: ListMenuProps) => {
  const colors = useColors()

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
          <BsThreeDotsVertical color={colors.fontSecondary} />
        </Flex>
      </MenuButton>
      <MenuList>
        <MenuItem onClick={props.onEdit} closeOnSelect>
          Edytuj
        </MenuItem>
        <MenuItem>
          <DeletePopover
            label="Czy na pewno chcesz usunąć tę listę?"
            onClick={props.onDelete}
            styles={false}
          />
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default ListMenu
