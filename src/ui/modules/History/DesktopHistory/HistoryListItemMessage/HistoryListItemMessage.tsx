import { Text } from '@chakra-ui/react'
import { memo } from 'react'
import { HistoryLogType } from '../../../../../mongo/models/history'
import { createTypesMap } from '../../../../../utils/helpers'

export const typesMap = createTypesMap()

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
      {`${typesMap.get(resourceType)} ${name} ${
        changedQuantity ? `x ${changedQuantity}` : ''
      }`}
    </Text>
  )
})
