import { Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import DeletePopover from '../Popovers/DeletePopover'
import { useColors } from '../../theme/useColors'
import { memo } from 'react'

export interface SchemeMenuProps {
  onDelete: () => void
  onOpenInfo: () => void
}

export const SchemeMenu = memo((props: SchemeMenuProps) => {
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
})
