import { shallowMount, createLocalVue } from '@vue/test-utils'
import Login from '@/components/Login.vue'
import ElementUI from 'element-ui'
const localVue = createLocalVue()
localVue.use(ElementUI)

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(Login, {
      localVue,
      propsData: { msg }
    })
    expect(wrapper.text()).toMatch(msg)
  })
})
