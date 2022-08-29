import { Text } from '@chakra-ui/react'
import { HistoryLogType } from '../../../../../mongo/models/history'
import { createTypesMap } from '../../../../../utils/helpers'

const typesMap = createTypesMap()

const HistoryListItemMessage = ({
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
      {`${typesMap.get(resourceType)} ${name} ${
        changedQuantity ? `x ${changedQuantity}` : ''
      }`}
    </Text>
  )
}

export default HistoryListItemMessage


