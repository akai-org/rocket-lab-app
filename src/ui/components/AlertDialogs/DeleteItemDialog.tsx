import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
} from '@chakra-ui/react'
import React, { Dispatch, memo, SetStateAction, useRef } from 'react'
import { useColors } from 'ui/theme'
import { ProductButton } from 'ui/components'
import { fetcher } from 'utils/requests'
import { API_URL } from 'utils/constants'
import { useDispatch } from 'react-redux'
import { updateSchema } from 'store/Slices/schemasSlice'

interface DeleteItemDialogProps {
  isOpenDialog: boolean
  onCloseDialog: () => void
  itemToDelete: string | undefined
  setItemToDelete: Dispatch<SetStateAction<string | undefined>>
  schemaId: string
}

export const DeleteItemDialog = memo(function DeleteItemDialog(
  props: DeleteItemDialogProps
) {
  const cancelRef = useRef(null)
  const colors = useColors()
  const dispatch = useDispatch()

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
              onClick={async () => {
                try {
                  const updatedSchema = await fetcher(
                    API_URL + '/api/schemas/deleteItem',
                    {
                      body: {
                        schemaId: props.schemaId,
                        itemId: props.itemToDelete,
                      },
                    }
                  )
                  dispatch(updateSchema(updatedSchema))
                } catch (error) {
                  console.log(error)
                } finally {
                  props.setItemToDelete(undefined)
                  props.onCloseDialog()
                }
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
