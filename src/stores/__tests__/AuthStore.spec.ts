import { EmptyUser } from "@/models/IUser";
import { AuthSevice } from "@/services/AuthService";
import { createPinia, setActivePinia } from "pinia";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { useAuthStore } from "../AuthStore";

describe('AuthStore', () => {
    beforeEach(() => {
        setActivePinia(createPinia())
    })
    
    it('initial state is empty', () => {
        const store = useAuthStore()

        expect(store.user).toEqual(EmptyUser)
        expect(store.isAuthenticated).toBeFalsy
    })
    
    it('executes login', async () => {
        AuthSevice.login = vi.fn(async (_) => { 
            return { 
                id: '123',
                name: 'user'
            }
        })
        const store = useAuthStore()
        expect(store.user).toEqual(EmptyUser)
        await store.login('user')
        expect(store.user).toEqual({
            id: '123',
            name: 'user'
        })
        expect(store.isAuthenticated).toBeTruthy
    })
    
    it('recovers session', async () => {
        AuthSevice.recover = vi.fn(async () => { 
            return { 
                id: '123',
                name: 'user'
            }
        })
        const store = useAuthStore()
        expect(store.user).toEqual(EmptyUser)
        await store.recover()
        expect(store.user).toEqual({
            id: '123',
            name: 'user'
        })
        expect(store.isAuthenticated).toBeTruthy
    })
    
    it('recovers empty session', async () => {
        AuthSevice.recover = vi.fn(async () => { 
            return null
        })
        const store = useAuthStore()
        expect(store.user).toEqual(EmptyUser)
        await store.recover()
        expect(store.user).toEqual(EmptyUser)
        expect(store.isAuthenticated).toBeFalsy
    })
    
    it('executes logout', async () => {
        AuthSevice.login = vi.fn(async (_) => { 
            return { 
                id: '123',
                name: 'user'
            }
        })
        AuthSevice.logout = vi.fn()
        const store = useAuthStore()
        await store.login('user')

        await store.logout()
        expect(store.user).toEqual(EmptyUser)
        expect(store.isAuthenticated).toBeFalsy
    })
})