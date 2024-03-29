import api from '@/plugins/api'
import MockAdapter from 'axios-mock-adapter'
import * as data from './data'

export default {
  setup: () => {
    const Mock = new MockAdapter(api)
    Mock.onPost('/authorize').replyOnce(401, data.authorize)
    Mock.onPost('/authorize').reply(data.authorize)
    Mock.onGet('/admin').reply(data.adminList)
    Mock.onPut(new RegExp(`/admin/status/*`)).reply(data.adminStatus)
    Mock.onGet(new RegExp(`/user/*`)).reply(data.user)
    Mock.onGet('/users').reply(data.users)
    Mock.onGet('/networkerror').networkError()
    Mock.onGet('/networkerroronce').networkErrorOnce()
    Mock.onGet('/timeout').timeout()
    Mock.onGet('/timeoutonce').timeoutOnce()
    Mock.onAny().reply(404)
  }
}
