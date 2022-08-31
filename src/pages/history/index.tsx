import type { NextPage } from 'next'
import { withPageAuthRequired } from '@auth0/nextjs-auth0'
import { useMediaQuery } from '@chakra-ui/react'

import DesktopHistory from '../../ui/modules/History/DesktopHistory/DesktopHistory'
import MobileHistory from '../../ui/modules/History/MobileHistory/MobileHistory'
import { connectDB } from '../../mongo/db'
import { HistoryLog } from '../../mongo/models/history'
import { Credentials } from '../../utils/credentials'
import { fetchLogs } from '../../services/historyService'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setFilters, setLogs } from '../../store/Slices/historySlice'

export enum HistoryEvent {
  ADDED = 'ADDED',
  EDITED = 'EDITED',
  REMOVED = 'REMOVED',
  TAKEN_OUT = 'TAKEN_OUT',
}

interface Props {
  logs: HistoryLog[]
  filters: {
    fromFilter?: string
    toFilter?: string
  }
}

const Home: NextPage<Props> = ({ logs, filters }) => {
  const dispatch = useDispatch()

  console.log({ filters })

  useEffect(() => {
    dispatch(setLogs(logs))
  }, [dispatch, logs])

  useEffect(() => {
    dispatch(setFilters(filters))
  }, [filters, dispatch])

  const [isDesktop] = useMediaQuery('(min-width: 900px)')
  const History = isDesktop ? <DesktopHistory /> : <MobileHistory />
  return History
}

export default Home

export const getServerSideProps = withPageAuthRequired({
  getServerSideProps: async ({
    req,
    res,
    query,
  }): Promise<{ props: Props }> => {
    try {
      await connectDB()
      await Credentials.withEditor(req, res)

      const logs = await fetchLogs()

      const fromFilter = query.from as string | undefined
      const toFilter = query.to as string | undefined

      console.log({ fromFilter, toFilter })

      return {
        props: {
          logs: JSON.parse(JSON.stringify(logs)),
          filters: JSON.parse(JSON.stringify({ fromFilter, toFilter })),
        },
      }
    } catch (error) {
      console.log(error)
      return { props: { logs: [], filters: {} } }
    }
  },
})
