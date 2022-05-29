import { getSession } from '@auth0/nextjs-auth0'
import { IncomingMessage, ServerResponse } from 'http'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import { User, userModel as UserModel } from '../mongo/models/user'
import {
  adminRoles,
  CredentialsReq,
  CredentialsRes,
  Permissions,
} from './types/backendGeneral'

export class Credentials {
  private static enumToUsersMap = new Map<adminRoles, Permissions>([
    ['admin', Permissions.admin],
    ['reader', Permissions.reader],
    ['editor', Permissions.editor],
  ])

  static async withAdmin(
    req: CredentialsReq,
    res: CredentialsRes,
    next?: () => Promise<void>
  ) {
    await Credentials.handeAuthorizationFlow(Permissions.admin, req, res, next)
  }

  static async withEditor(
    req: CredentialsReq,
    res: CredentialsRes,
    next?: () => Promise<void>
  ) {
    await Credentials.handeAuthorizationFlow(Permissions.editor, req, res, next)
  }

  static async withReader(
    req: CredentialsReq,
    res: CredentialsRes,
    next?: () => Promise<void>
  ) {
    await Credentials.handeAuthorizationFlow(Permissions.reader, req, res, next)
  }

  private static async handeAuthorizationFlow(
    requiredPermission: Permissions,
    req: CredentialsReq,
    res: CredentialsRes,
    next: (() => Promise<void>) | undefined
  ) {
    const userRole = await Credentials.parseUserData(req, res)

    const permission = Credentials.parseUserRole(userRole)

    this.checkPermission(permission, requiredPermission)

    if (next) {
      await next()
    }
  }

  private static async parseUserData(
    req: IncomingMessage & {
      cookies: NextApiRequestCookies
    },
    res: ServerResponse
  ): Promise<adminRoles> {
    const session = getSession(req, res)
    if (!session) {
      throw new Error('Unauthorized access')
    }

    // Getting user info
    const validId = (session.user.sub as string).split('|')[1]
    const user = await UserModel.findById<User>(validId)
    console.log(user)
    if (!user?.role) {
      throw new Error('Unauthorized access/ User role is not defined properly')
    }
    return user.role
  }

  private static parseUserRole(userRole: adminRoles) {
    return Credentials.enumToUsersMap.get(userRole)
  }

  private static checkPermission(
    userPermission: Permissions | undefined,
    demandedPermission: Permissions
  ) {
    if (!userPermission)
      throw new Error('Unauthorized access. User permission is not valid')
    if (userPermission < demandedPermission)
      throw new Error('Unauthorized access')
  }
}
