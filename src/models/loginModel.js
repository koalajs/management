import local from '@/plugins/local'
import { TOKEN_KEY, ROLES_KEY, TIMEOUT_KEY } from '../common/consts.js'
import api from '@/plugins/api'

export default {
  async isLogin () {
    const token = await local.getItem(TOKEN_KEY)
    return token !== null
  },
  setToken (token) {
    return local.setItem(TOKEN_KEY, token)
  },
  getToken () {
    return local.getItem(TOKEN_KEY)
  },
  setRoles (list) {
    return local.setItem(ROLES_KEY, list)
  },
  login (data) {
    return api.post('authorize', data)
  },
  setTimeout (t) {
    return local.setItem(TIMEOUT_KEY, parseInt(t))
  },
  async logout () {
    await local.removeItem(TOKEN_KEY)
    await local.removeItem(ROLES_KEY)
    return true
  }
}
