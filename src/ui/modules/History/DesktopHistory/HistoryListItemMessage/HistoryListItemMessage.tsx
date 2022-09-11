import { Text } from '@chakra-ui/react'
import { HistoryLogType } from '../../../../../mongo/models/history'

export const typesMap: Record<HistoryLogType, string> = {
  added: 'Dodano do magazynu:',
  distributed: 'Wyciągnięto z magazynu:',
  modified: 'Zmodyfikowano w magazynie:',
  removed: 'Usunięto z magazynu:'
}

export const HistoryListItemMessage = ({
  name,
  changedQuantity,
  resourceType,
}: {
  name: string
  changedQuantity?: number
  resourceType: HistoryLogType
}) => {
  return (
    <Text fontSize="sm" isTruncated>
      {`${typesMap[resourceType]} ${name} ${
        changedQuantity ? `x ${changedQuantity}` : ''
      }`}
    </Text>
  )
}
