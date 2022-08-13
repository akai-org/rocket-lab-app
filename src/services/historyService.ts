import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
import { HistoryLogType, HistoryModel, Resource } from 'mongo'

export async function createHistoryLog(
  author: string,
  type: HistoryLogType,
  resource: Resource
) {
  return await HistoryModel.create({ author, type, resource })
}

export function validateSession(req: NextApiRequest, res: NextApiResponse) {
  const session = getSession(req, res)
  if (!session) throw new Error('No valid user logged in')
  return session
}
