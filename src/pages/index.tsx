import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import ItemsList, { ItemProps } from '../components/Storage/ItemsList/ItemsList'
import { connectDB } from '../mongo/db';
import { ItemModel } from '../mongo/models/item';
import { Text } from '@chakra-ui/react'

interface Props {
  items?: ItemProps[]
  error?: Error
}

const Home: NextPage<Props> = ({ items, error }) => {
  return (!error ?
    <ItemsList items={items ?? []} /> :
    <Text>{error.message}</Text>)
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (): Promise<{props: Props}> => {
    // Fetch the items we already have in the DB
    // For now it's not wrapped into any specific function
    try{
      await connectDB();
      const items = await ItemModel.find();

      const itemData = items.map((item) => {
        return {
          id: item.id,
          name: item.name,
          description: item.description,
          imageUrl: item.imageUrl
        }
      })

      return {
        props: {
          items: itemData,
        },
      }
    }catch(e){
      console.log(e)
      return {
        props: {
          error: JSON.parse(JSON.stringify(e))
        },
      }
    }
  }
})
