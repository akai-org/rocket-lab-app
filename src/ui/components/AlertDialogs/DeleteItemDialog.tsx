import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import React, { memo, useRef } from 'react'
import { useColors } from 'ui/theme'
import { ProductButton } from 'ui/components'

interface DeleteItemDialogProps {
  isOpenDialog: boolean
  onCloseDialog: () => void
}

export const DeleteItemDialog = memo((props: DeleteItemDialogProps) => {
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
})
