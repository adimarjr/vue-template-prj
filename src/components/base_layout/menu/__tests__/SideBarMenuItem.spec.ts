import { describe, it, expect, vi } from 'vitest'

import { mount } from '@vue/test-utils'
import SideBarMenuItem from '../SideBarMenuItem.vue'
import { createTestingPinia } from '@pinia/testing'
import { createRouter, createWebHistory } from 'vue-router'

describe('Base Layout SideBarMenuItem', () => {
    it('renders successfully', () => {
        const wrapper = mount(SideBarMenuItem, {
            props: {
                'menu-item': {
                    title: 'item1',
                    route: '/test'
                }
            },
            global: {
                plugins: [
                    createRouter({
                        history: createWebHistory(),
                        routes: [{
                            path: '/test',
                            name: 'item1',
                            component: vi.fn()
                        },]
                    }),
                    createTestingPinia({
                        createSpy: vi.fn()
                    }),
                ]
            }
        })
        expect(wrapper.text()).to.contain('item1')
        expect((wrapper.find('a').element as HTMLAnchorElement).href).to.contain('/test')
    })
})
