import { describe, it, expect, vi, beforeEach } from 'vitest'

import { mount } from '@vue/test-utils'
import SideBarMenu from '../SideBarMenu.vue'
import { createTestingPinia } from '@pinia/testing'

describe('Base Layout SideBarMenu', () => {
    it('renders successfully', () => {
        const menu = {
            items: [
                {
                    route: '/',
                    title: 'Home'
                },
                {
                    route: '/dashboard',
                    title: 'Dashboard'
                }
            ]
        }
        const wrapper = mount(SideBarMenu, {
            global: {
                stubs: ['router-link'],
                plugins: [
                    createTestingPinia({
                        createSpy: vi.fn(),
                        initialState: { menu }
                    }),
                ],
            }
        })
        expect(wrapper.findAllComponents('SideBarMenuItem')).to.be.empty
    })
})
