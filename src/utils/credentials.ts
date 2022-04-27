import { getSession } from '@auth0/nextjs-auth0'
import { IncomingMessage, ServerResponse } from 'http'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import { User, userModel as UserModel } from '../mongo/models/user'
export enum Permissions {
  reader,
  editor,
  admin,
}

type adminRoles = 'admin' | 'editor' | 'reader'

export class Credentials {
  private static enumToUsersMap = new Map<adminRoles, Permissions>([
    ['admin', Permissions.admin],
    ['reader', Permissions.reader],
    ['editor', Permissions.editor],
  ])

  static withAdmin = async (
    req: IncomingMessage & {
      cookies: NextApiRequestCookies
    },
    res: ServerResponse, next?: () => Promise<void>
  ) => {
      console.log(this)
      const userRole = await this.parseUserData(req, res)

      const permission = this.parseUserRole(userRole)

      this.checkPermission(permission, Permissions.admin)

      if(next){
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

    if (!user?.role) {
      throw new Error('Unauthorized access/ User role is not defined properly')
    }
    console.log(user.role)
    return user.role
  }

  private static parseUserRole(userRole: adminRoles) {
    return this.enumToUsersMap.get(userRole)
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
