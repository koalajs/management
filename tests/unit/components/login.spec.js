import { shallowMount, createLocalVue } from '@vue/test-utils'
import LoginForm from '@/components/LoginForm.vue'
import ElementUI from 'element-ui'
const localVue = createLocalVue()
localVue.use(ElementUI)

describe('HelloWorld.vue', () => {
  it('renders props.title when passed', () => {
    const title = 'new message'
    const wrapper = shallowMount(LoginForm, {
      localVue,
      propsData: { title }
    })
    expect(wrapper.text()).toMatch(title)
  })
})
