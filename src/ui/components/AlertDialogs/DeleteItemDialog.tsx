import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
} from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useColors } from '../../../theme/useColors'
import ProductButton from '../Custom Buttons/ProductButton/ProductButton'

interface DeleteItemDialogProps {
  isOpenDialog: boolean
  onCloseDialog: () => void
}

const DeleteItemDialog = (props: DeleteItemDialogProps) => {
  const cancelRef = useRef(null)
  const colors = useColors()

  return (
    <AlertDialog
      isOpen={props.isOpenDialog}
      leastDestructiveRef={cancelRef}
      onClose={props.onCloseDialog}
      isCentered
    >
      <AlertDialogOverlay>
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Usuwanie elementu ze schematu
          </AlertDialogHeader>
          <AlertDialogBody>
            Czy na pewno chcesz usunąć ten element ze schematu?
          </AlertDialogBody>
          <AlertDialogFooter>
            <ProductButton
              onClick={props.onCloseDialog}
              fontSize="sm"
              w="80px"
              ml="10px"
            >
              Anuluj
            </ProductButton>
            <ProductButton
              backgroundColor={colors.errorPrimary}
              onClick={() => {
                /*USUWANIE*/
              }}
              fontSize="sm"
              w="80px"
              ml="10px"
            >
              Usuń
            </ProductButton>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  )
}

export default DeleteItemDialog
