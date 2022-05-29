import { IncomingMessage, ServerResponse } from 'http'
import { NextApiRequest, NextApiResponse } from 'next'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'

export enum Permissions {
  reader = 1,
  editor = 2,
  admin = 3,
}

export type adminRoles = 'admin' | 'editor' | 'reader'

export type CredentialsReq =
  | (IncomingMessage & {
      cookies: NextApiRequestCookies
    })
  | NextApiRequest

export type CredentialsRes = ServerResponse | NextApiResponse
