import { label, NextMiddleware } from 'next-api-middleware'
import { connectDB } from '../mongo/db'
import { Credentials } from './credentials'

const errorHandler: NextMiddleware = async (req, res, next) => {
  try {
    await next()
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Coś się zjebało ewidentnie' })
  }
}
const connectDatabase: NextMiddleware = async (req, res, next) => {
  await connectDB()
  await next()
}

export const withMiddleware = label(
  {
    errorHandler,
    connectDatabase,
    withAdmin: Credentials.withAdmin,
    withEditor: Credentials.withEditor,
    withReader: Credentials.withReader,
  },
  ['errorHandler', 'connectDatabase']
)
