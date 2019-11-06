import api from '@/plugins/api'
import MockAdapter from 'axios-mock-adapter'

import * as data from './data'

export default {
  setup: () => {
    const Mock = new MockAdapter(api)
    Mock.onPost('/authorize').reply(200, data.authorize)
  }
}
