import { Text } from '@chakra-ui/react'

const HistoryListItemMessage = ({
  name,
  changedQuantity,
}: {
  name: string
  changedQuantity?: number
}) => {
  console.log(changedQuantity)
  return (
    <Text fontSize="sm" isTruncated>
      {`Wyciągnięto z magazynu: ${name} ${
        changedQuantity ? `x ${changedQuantity}` : ''
      }`}
    </Text>
  )
}

export default HistoryListItemMessage
