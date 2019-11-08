import local from '@/plugins/local'
import { TOKEN_KEY, ROLES_KEY, TIMEOUT_KEY, LAST_ACTIVE_KEY, NOT_LOGIN, IS_TIMEOUT } from '../common/consts.js'
import api from '@/plugins/api'
import { isNil } from 'ramda'

export default {
  async isLogin () {
    const token = await local.getItem(TOKEN_KEY)
    return token !== null
  },
  diffTime (t, l) {
    return (l + t * 60 * 1000) < new Date().getTime()
  },
  async checkTimeout () {
    const token = await local.getItem(TOKEN_KEY)
    const timeout = await local.getItem(TIMEOUT_KEY)
    const lastActive = await local.getItem(LAST_ACTIVE_KEY)
    if (isNil(token) || isNil(timeout) || isNil(lastActive)) {
      return {
        result: true,
        status: NOT_LOGIN
      }
    } else if (this.diffTime(timeout, lastActive)) {
      this.logout()
      return {
        result: true,
        status: IS_TIMEOUT
      }
    } else {
      return {
        result: false
      }
    }
  },
  setLastActive (t) {
    return local.setItem(LAST_ACTIVE_KEY, (t === undefined ? new Date().getTime() : t))
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
    await local.removeItem(LAST_ACTIVE_KEY)
    await local.removeItem(TIMEOUT_KEY)
    return true
  }
}
