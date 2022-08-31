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
import {
  setFilters,
  setLogs,
  setSorting,
} from '../../store/Slices/historySlice'
import { SortType } from '../../services/itemsService'

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
  sort?: SortType
}

const Home: NextPage<Props> = ({ logs, filters, sort }) => {
  const dispatch = useDispatch()
  console.log(sort)

  useEffect(() => {
    dispatch(setLogs(logs))
  }, [dispatch, logs])

  useEffect(() => {
    dispatch(setFilters(filters))
  }, [filters, dispatch])

  useEffect(() => {
    dispatch(setSorting(sort))
  }, [dispatch, sort])

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
      const sort = query.sort as SortType | undefined

      return {
        props: {
          logs: JSON.parse(JSON.stringify(logs)),
          filters: JSON.parse(JSON.stringify({ fromFilter, toFilter })),
          sort: sort || 'newest',
        },
      }
    } catch (error) {
      console.log(error)
      return { props: { logs: [], filters: {} } }
    }
  },
})
