import { Badge, BadgeProps } from '@chakra-ui/react'
import { Role } from '../../../utils/types/frontendGeneral'

interface RoleBadgeProps extends BadgeProps {
  role: Role
}

const RoleBadge = ({ role, ...restProps }: RoleBadgeProps) => {
  let option
  switch (role) {
    case 'ADMIN':
      option = { role, color: 'orange' }
      break
    case 'EDITOR':
      option = { role, color: 'blue' }
      break
    case 'READER':
      option = { role, color: 'green' }
      break
    default:
      option = { role: 'ERROR', color: 'red' }
  }
  return (
    <Badge variant="solid" colorScheme={option.color} {...restProps}>
      {role}
    </Badge>
  )
}

export default RoleBadge
