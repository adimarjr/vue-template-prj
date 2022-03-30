import type { IUser } from "@/models/IUser"

export class AuthSevice {
    static async login(userName: string): Promise<IUser> {
        console.log(`login with: ${userName}`)
        if (userName.startsWith('test')) {
            throw Error('invalid user')
        }
        const user = { id: '123', name: userName }
        localStorage.setItem('auth', JSON.stringify(user))
        return { id: '123', name: userName }
    }

    static async recover(): Promise<IUser | null> {
        console.log('recovering')
        const session = localStorage.getItem('auth')
        if (session) {
            const user: IUser = JSON.parse(session)
            return user;
        }
        return null
    }

    static logout() {
        console.log('logout')
        localStorage.removeItem('auth')
    }
}