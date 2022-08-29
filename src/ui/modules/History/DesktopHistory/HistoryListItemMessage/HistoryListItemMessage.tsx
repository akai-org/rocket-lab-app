import { Text } from '@chakra-ui/react'

const HistoryListItemMessage = ({
  name,
  quantity,
}: {
  name: string
  quantity: number
}) => {
  return (
    <Text fontSize="sm" isTruncated>
      {`Wyciągnięto z magazynu: ${name} x ${quantity}`}
    </Text>
  )
}

export default HistoryListItemMessage
