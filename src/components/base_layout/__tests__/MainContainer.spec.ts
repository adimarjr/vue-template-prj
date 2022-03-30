import { describe, it, expect, vi } from 'vitest'

import { shallowMount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import MainContainer from '../MainContainer.vue'

describe('Base Layout MainContainer', () => {
    it('renders successfully', () => {
        const wrapper = shallowMount(MainContainer, {
            global: {
                plugins: [createTestingPinia({
                  createSpy: vi.fn(),
                  initialState: { auth: { user: { id: '1', name: 'user@name.com' } } }
                })],
              },
        })
        expect(wrapper.findComponent('Header'))
        expect(wrapper.findComponent('SideBarMenu'))
        expect(wrapper.findComponent('RouterView'))
    })
})
