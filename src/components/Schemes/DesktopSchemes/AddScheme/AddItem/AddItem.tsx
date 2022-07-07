import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import { useSelector } from 'react-redux'
import { itemsInfo } from '../../../../../store/store'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'
import SearchSchemeSelect from '../../../../UI/SearchSchemeSelect/SearchSchemeSelect'
import { SchemasContext } from '../../../../../pages/schemes'

interface SelectedType {
  value: string | null
  label: string | null
  id: string | null
}

interface AddItemProps {
  itemsValid: boolean
}

const AddItem = (props: AddItemProps) => {
  const context = useContext(SchemasContext)
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState<
    SelectedType | undefined
  >({
    value: null,
    label: null,
    id: null,
  })
  const itemsData = useSelector(itemsInfo)

  const options = itemsData.items.map((item) => {
    return { value: item.name, label: item.name, id: item.id }
  })

  const handleAdd = () => {
    const item = itemsData.items.find((item) => item?.id === selectedOption?.id)
    item && context?.addItem({ item, neededQuantity: quantity })
  }

  return (
    <Flex w="100%" direction="column">
      <Flex>
        <SearchSchemeSelect
          value={selectedOption}
          onChange={(e) => {
            console.log(e)
            // @ts-ignore
            e !== null && setSelectedOption({ ...e })
          }}
          options={options}
        />
        <NumberInput
          allowMouseWheel
          h="32px"
          w="20%"
          maxW="100px"
          minW="67px"
          ml="10px"
          fontSize="16px"
          borderColor="#E2E8F0"
          defaultValue={quantity}
          onChange={(e) => {
            setQuantity(parseInt(e))
          }}
          min={0}
        >
          <NumberInputField h="32px" px="5px" />
          <NumberInputStepper>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
      </Flex>
      {!props.itemsValid && (
        <Text fontSize="14px" color="red">
          Wybierz przedmioty
        </Text>
      )}
      <ProductButton
        m="20px 0 0 auto"
        fontSize="16px"
        onClick={handleAdd}
        w="150px"
      >
        Dodaj przedmiot
      </ProductButton>
    </Flex>
  )
}

export default AddItem
