import {
  Flex,
  Image,
  Text,
  Box,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  ButtonGroup,
} from '@chakra-ui/react'
import { useState } from 'react'
import { Item } from '../../../../mongo/models/item'
import ProductButton from '../../../Overridden/ProductButton/ProductButton'

interface Props {
  item: Item
}

const GridItem = ({ item }: Props) => {
  const [isEdit, setIsEdit] = useState(false)
  return (
    <Flex flexDirection="column" w="50%" maxW="200px" m="10px auto 0 auto">
      <Image src={item.imageUrl} w="80%" m="5px auto" alt="" />
      <Box textAlign="center" w="70%" m="0 auto">
        <Text fontSize="16px" fontWeight="500">
          {item.name}
        </Text>
        <Box h="100%" maxH="42px">
          <Text fontSize="12px" color="#878585">
            {item.description.length > 40
              ? item.description.substring(0, 40) + '...'
              : item.description}
          </Text>
        </Box>
        <Box w="100%" mb="5px">
          <Text fontSize="14px" fontWeight="400">
            {/* Warunkowe wyświetlanie ilości: jeżeli ilość===0 to napis brak w magazynie */}
            Ilość: 58
          </Text>
        </Box>
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="space-around"
        >
          {!isEdit ? (
            <ProductButton
              device="desktop"
              w="80px"
              onClick={() => {
                setIsEdit(true)
              }}
              fontSize="16px"
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
              <ButtonGroup isAttached mt="10px">
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
            mt="5px"
            mb="25px"
            w="120px"
            onClick={() => {}}
            fontSize="16px"
          >
            Dodaj do listy
          </ProductButton>
        </Flex>
      </Box>
    </Flex>
  )
}

export default GridItem
