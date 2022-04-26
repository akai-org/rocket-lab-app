import { getSession } from '@auth0/nextjs-auth0'
import { NextApiRequest, NextApiResponse } from 'next'
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

  static async withAdmin(req: NextApiRequest, res: NextApiResponse) {
    const session = getSession(req, res)
    if (!session) {
      throw new Error('Unauthorized access')
    }

    // Getting user info
    const validId = (session.user.sub as string).split('|')[1]
    const user = await UserModel.findById<User>(validId)

    if(!user?.role){
        throw new Error('Unauthorized access/ User role is not defined properly')
    }

    const permission = this.parseUser(user.role)

    if(!permission){
        throw new Error('Unauthorized access. User permission is not valid')
    }

    if (permission < Permissions.admin) throw new Error('Unauthorized access')
  }

  private static parseUser(userRole: adminRoles) {
    return this.enumToUsersMap.get(userRole)
  }
}
