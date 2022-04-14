import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import ItemsList, { ItemProps } from '../components/Storage/ItemsList/ItemsList'
import { connectDB } from '../mongo/db';
import { ItemModel } from '../mongo/models/item';

interface Props {
  items?: ItemProps[]
}

const Home: NextPage<Props> = ({ items }) => {
  return <ItemsList items={items ?? []} />
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async (): Promise<{props: Props}> => {
    // Fetch the items we already have in the DB
    // For now it's not wrapped into any specific function
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
  }
})
