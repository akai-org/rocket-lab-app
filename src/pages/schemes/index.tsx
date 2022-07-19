import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'
import DesktopSchemes from '../../ui/modules/Schemes/DesktopSchemes/DesktopSchemes'
import MobileSchemes from '../../ui/modules/Schemes/MobileSchemes/MobileSchemes'
import {
  PopulatedSchema,
  SchemaModel,
  TmpSchemaItem,
} from '../../mongo/models/schema'
import { connectDB } from '../../mongo/db'
import { Credentials } from '../../utils/credentials'
import { createContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSchemas } from '../../store/Slices/schemasSlice'

interface Props {
  schemas: PopulatedSchema[]
}

interface TemporaryNewSchemaData {
  name: string
  description: string
  items: TmpSchemaItem[]
  addItem: (item: TmpSchemaItem) => void
  removeItem: (item: TmpSchemaItem) => void
  updateItem: (item: TmpSchemaItem) => void
  updateName: (name: string) => void
  updateDescription: (description: string) => void
  clear: () => void
}

export const SchemasContext = createContext<TemporaryNewSchemaData | null>(null)

const Home: NextPage<Props> = ({ schemas }) => {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [items, setItems] = useState<TmpSchemaItem[]>([])

  const addItem = (schemaItem: TmpSchemaItem) => {
    setItems((state) => [...state, schemaItem])
  }

  const removeItem = (schemaItem: TmpSchemaItem) => {
    setItems((state) =>
      state.filter(({ item }) => item.id !== schemaItem.item.id)
    )
  }

  const updateItem = (schemaItem: TmpSchemaItem) => {
    const index = items.findIndex(
      (schemaItem) => schemaItem.item.id === schemaItem.item.id
    )
    const copiedItems = [...items]
    if (index != -1) {
      copiedItems.splice(index, 1, schemaItem)
      setItems(copiedItems)
    }
  }

  const updateName = (name: string) => setName(name)

  const updateDescription = (description: string) => setDescription(description)

  const clear = () => {
    setName('')
    setDescription('')
    setItems([])
  }

  useEffect(() => {
    dispatch(setSchemas(schemas))
  }, [dispatch, schemas])

  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const History = isDesktop ? <DesktopSchemes /> : <MobileSchemes />
  return (
    <SchemasContext.Provider
      value={{
        addItem,
        description,
        items,
        name,
        removeItem,
        updateDescription,
        updateName,
        updateItem,
        clear
      }}
    >
      {History}
    </SchemasContext.Provider>
  )
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }): Promise<{ props: Props }> => {
    try {
      await connectDB()
      await Credentials.withReader(req, res)

      const schemas = await SchemaModel.find().populate('items.item')

      return { props: { schemas: JSON.parse(JSON.stringify(schemas)) } }
    } catch (error) {
      console.log(error)
      return { props: { schemas: [] } }
    }
  },
})
