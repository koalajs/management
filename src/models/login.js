import local from '@/plugins/local'
import { TOKEN_KEY, ROLES_KEY } from '../common/consts.js'
import api from '@/plugins/api'

const _setItem = (k, v) => local.setItem(k, v)
const _getItem = k => local.getItem(k)
const _removeItem = k => local.removeItem(k)

export default {
  async isLogin () {
    const token = await _getItem(TOKEN_KEY)
    return token !== null
  },
  setToken (token) {
    return _setItem(TOKEN_KEY, token)
  },
  getToken () {
    return _getItem(TOKEN_KEY)
  },
  setRoles (list) {
    return _setItem(ROLES_KEY, list)
  },
  login (data) {
    return api.post('authorize', data)
  },
  async logout () {
    await _removeItem(TOKEN_KEY)
    await _removeItem(ROLES_KEY)
    return true
  }
}
