import { describe, it, expect, beforeEach, vi } from 'vitest'

import { useAuthStore } from '@/stores/AuthStore';
import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import Header from '../Header.vue'

describe('Base Layout Header', () => {
  const appTitle = 'App title';
  beforeEach(() => {

  })

  it('renders properly', () => {
    const wrapper = mount(Header, {
      props: { title: appTitle },
      global: {
        plugins: [createTestingPinia({
          createSpy: vi.fn(),
          initialState: { auth: { user: { id: '1', name: 'user@name.com' } } }
        })],
      },
    })

    expect(wrapper.find('.navbar-brand').text()).to.contain('App title')
    expect(wrapper.text()).to.contain('user@name.com')
  })
})
