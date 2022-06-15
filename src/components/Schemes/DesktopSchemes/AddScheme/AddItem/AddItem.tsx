import {
  Flex,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
} from '@chakra-ui/react'
import Select from 'react-select'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { itemsInfo, schemeInfo } from '../../../../../store/store'
import ProductButton from '../../../../UI/Custom Buttons/ProductButton/ProductButton'
import { addItem } from '../../../../../store/Slices/schemeSlice'
import is from '@sindresorhus/is'
import ItemsList from '../ItemsList/ItemsList'

interface SelectedType {
  value: string | null
  label: string | null
  id: string | null
}

interface AddItemProps {
  itemsValid: boolean
}

const AddItem = (props: AddItemProps) => {
  const [quantity, setQuantity] = useState(1)
  const [selectedOption, setSelectedOption] = useState<SelectedType>({
    value: null,
    label: null,
    id: null,
  })
  const itemsData = useSelector(itemsInfo)
  const dispatch = useDispatch()

  const options = itemsData.items.map((item) => {
    return { value: item.name, label: item.name, id: item.id }
  })

  const handleAdd = () => {
    const item = itemsData.items.find((item) => item?.id === selectedOption?.id)
    item && dispatch(addItem({ ...item, quantity: quantity }))
  }

  return (
    <Flex w="100%" direction="column">
      <Flex>
        <Select
          styles={{
            container: (provided) => ({
              ...provided,
              width: '100%',
            }),
            control: () => ({
              display: 'flex',
              border: '1px solid #E2E8F0',
              borderRadius: '6px',
              height: '32px',
              lineHeight: '20px',
            }),
            option: (provided) => ({
              ...provided,
              height: '32px',
              lineHeight: '20px',
            }),
          }}
          maxMenuHeight={200}
          value={selectedOption}
          onChange={(e) => {
            e !== null && setSelectedOption({ ...e })
          }}
          options={options}
        />
        <NumberInput
          allowMouseWheel
          h="32px"
          w="20%"
          maxW="100px"
          ml="10px"
          fontSize="16px"
          borderColor="#E2E8F0"
          defaultValue={quantity}
          onChange={(e) => {
            setQuantity(parseInt(e))
          }}
          min={0}
        >
          <NumberInputField h="32px" />
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
