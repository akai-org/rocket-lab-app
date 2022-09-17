import { Text } from '@chakra-ui/react'
import { memo } from 'react'
import { HistoryLogType } from '../../../../../mongo/models/history'

export const typesMap: Record<HistoryLogType, string> = {
  added: 'Dodano:',
  distributed: 'Wyciągnięto:',
  modified: 'Zmodyfikowano:',
  removed: 'Usunięto:'
}

export const HistoryListItemMessage = memo(function HistoryListItemMessage({
  name,
  changedQuantity,
  resourceType,
}: {
  name: string
  changedQuantity?: number
  resourceType: HistoryLogType
}) {
  return (
    <Text fontSize="sm" isTruncated>
      {`${typesMap[resourceType]} ${name} ${
        changedQuantity ? `x ${changedQuantity}` : ''
      }`}
    </Text>
  )
})
