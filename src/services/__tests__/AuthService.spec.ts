import { afterAll, describe, expect, it, vi } from "vitest";
import { AuthSevice } from "../AuthService";

describe('AuthService', () => {
    afterAll(() => {
        vi.resetAllMocks()
    })

    describe('login', () => {
        it('returns user when login is sucessful', async () => {
            const response = await AuthSevice.login('user1')
            expect(response.id).to.equal('123')
            expect(response.name).to.equal('user1')
        })

        it('throws error when invalid user', async () => {
            await expect(AuthSevice.login('test')).rejects.toThrowError('invalid user')
        })
    })

    describe('recover', () => {
        it('returns null if no session', async () => {
            localStorage.removeItem('auth')
            const response = await AuthSevice.recover()
            expect(response).toBeNull
        })

        it('returns user if session exists', async () => {
            localStorage.setItem('auth', JSON.stringify({ id: '1', name: 'user' }))
            
            const response = await AuthSevice.recover()
            expect(response?.id).toBe('1')
            expect(response?.name).to.equal('user')
        })
    })

    describe('logout', () => {
        it('removes user session', () => {
            localStorage.setItem('auth', JSON.stringify({ id: '1', name: 'user' }))
        
            AuthSevice.logout()
            
            expect(localStorage.getItem('auth')).toBeNull
        })
    })
})