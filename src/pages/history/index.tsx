import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'

import DesktopHistory from '../../ui/modules/History/DesktopHistory/DesktopHistory'
import MobileHistory from '../../ui/modules/History/MobileHistory/MobileHistory'
import { connectDB } from '../../mongo/db'
import { HistoryLog } from '../../mongo/models/history'
import { Credentials } from '../../utils/credentials'
import { fetchLogs } from '../../services/historyService'

export enum HistoryEvent {
  ADDED = 'ADDED',
  EDITED = 'EDITED',
  REMOVED = 'REMOVED',
  TAKEN_OUT = 'TAKEN_OUT',
}

interface Props {
  logs: HistoryLog[]
}

const Home: NextPage<Props> = ({ logs }) => {
  console.log(logs)
  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const History = isDesktop ? <DesktopHistory /> : <MobileHistory />
  return History
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({ req, res }): Promise<{ props: Props }> => {
    try {
      await connectDB()
      await Credentials.withEditor(req, res)

      const logs = await fetchLogs()
      return { props: { logs: JSON.parse(JSON.stringify(logs)) } }
    } catch (error) {
      return { props: { logs: [] } }
    }
  },
})
