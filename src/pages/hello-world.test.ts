import { shallowMount } from '@vue/test-utils'
import HelloWorld from './hello-world.vue'

describe('hello World', () => {
  const wrapper = shallowMount(HelloWorld)
  const h1 = wrapper.find('h1')

  it('should mount', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should render', () => {
    expect(h1.text()).toBe('Hello World')
  })
})
