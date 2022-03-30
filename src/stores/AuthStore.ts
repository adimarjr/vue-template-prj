import { defineStore } from "pinia"
import { EmptyUser } from '@/models/IUser'
import { AuthSevice } from "@/services/AuthService"

export enum AuthStatus {
    Unauthenticated,
    Authenticated,
    Error,
}

// Status {
//     NotLoaded,
//     Loaded,
//     CreateStarted,
//     CreatedSuccess,
//     Error,
// }

export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: EmptyUser,
        status: AuthStatus.Unauthenticated,
        errorMessage: ''
    }),
    getters: {
        isAuthenticated: (state) => !!state.user.id
    },
    actions: {
        async login(userName: string) {
            try {
                this.user = await AuthSevice.login(userName)
                this.status = AuthStatus.Authenticated
            } catch (error: any) {
                this.status = AuthStatus.Error
                this.errorMessage = error.Message
            }
        },
        async recover() {
            this.user = (await AuthSevice.recover()) ?? EmptyUser
        },
        async logout() {
            await AuthSevice.logout()
            this.user = EmptyUser
        }
    }
})