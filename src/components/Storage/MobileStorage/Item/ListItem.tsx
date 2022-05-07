import {
  Box,
  Button,
  Flex,
  Image,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  ButtonGroup,
} from '@chakra-ui/react'
import { Item } from '../../../../mongo/models/item'
import ProductButton from '../../../Overridden/ProductButton/ProductButton'
import { useState } from 'react'

interface Props {
  item: Item
}

const ListItem = ({ item }: Props) => {
  const [quantity, setQuantity] = useState(0)
  const [isEdit, setIsEdit] = useState(false)
  return (
    <Flex
      w="95%"
      m="0 auto"
      justifyContent="flex-start"
      borderBottom="2px solid #D5D5D5"
    >
      <Flex m="auto 0 auto 10px">
        <Image src={item.imageUrl} h="100px" w="100px" />
      </Flex>
      <Box h="100%" w="80%" m="0 auto 0 0" textAlign="left" p="20px">
        <Text fontSize="16px" fontWeight="500">
          {item.name}
        </Text>
        <Text fontSize="12px" color="#878585">
          {item.description}
        </Text>
        <Text fontSize="16px">Ilość: 58</Text>
        <Flex flexDirection="row" mt="5px">
          {quantity ? (
            <Flex flexDirection="row" justifyContent="flex-end">
              <NumberInput
                h="32px"
                w="84px"
                borderColor="#E2E8F0"
                defaultValue={1}
                min={1}
                mr="10px"
              >
                <NumberInputField h="32px" />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
              <Button
                w="27px"
                pb="5px"
                size="sm"
                borderRadius="6px"
                fontWeight="400"
                fontSize="30px"
                bgColor="#FF7700"
                color="white"
              >
                +
              </Button>
            </Flex>
          ) : (
            <Flex justifyContent="flex-end">
              {!isEdit ? (
                <ProductButton
                  device="desktop"
                  w="80px"
                  onClick={() => {
                    setIsEdit(true)
                  }}
                  fontSize="16px"
                  mr="5px"
                >
                  Edytuj
                </ProductButton>
              ) : (
                <>
                  <NumberInput
                    h="32px"
                    w="84px"
                    borderColor="#E2E8F0"
                    defaultValue={1}
                    min={1}
                  >
                    <NumberInputField h="32px" />
                    <NumberInputStepper>
                      <NumberIncrementStepper />
                      <NumberDecrementStepper />
                    </NumberInputStepper>
                  </NumberInput>
                  <ButtonGroup isAttached mx="5px">
                    <ProductButton
                      device="desktop"
                      size="sm"
                      pb="5px"
                      onClick={() => {
                        setIsEdit(false)
                      }}
                    >
                      +
                    </ProductButton>
                    <ProductButton
                      device="desktop"
                      size="sm"
                      pb="5px"
                      onClick={() => {
                        setIsEdit(false)
                      }}
                    >
                      -
                    </ProductButton>
                  </ButtonGroup>
                </>
              )}
              <ProductButton
                device="desktop"
                w="120px"
                onClick={() => {}}
                fontSize="16px"
              >
                Dodaj do listy
              </ProductButton>
            </Flex>
          )}
        </Flex>
      </Box>
    </Flex>
  )
}

export default ListItem
