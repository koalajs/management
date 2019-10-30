import local from '@/plugins/local'
import { TOKEN_KEY } from '../common/consts.js'
import api from '@/plugins/api'
export default {
  isLogin () {
    return new Promise((resolve, reject) => {
      local.getItem(TOKEN_KEY).then(res => {
        if (res === null) {
          resolve(false)
        }
        resolve(true)
      }).catch(e => {
        reject(e)
      })
    })
  },
  setToken (token) {
    return new Promise((resolve, reject) => {
      local.setItem(TOKEN_KEY, token).then(res => {
        resolve(true)
      }).catch(e => {
        reject(e)
      })
    })
  },
  getToken () {
    return new Promise((resolve, reject) => {
      local.getItem(TOKEN_KEY).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  login (data) {
    api.post('authorize', data).then(res => {
      return res
    }).catch(e => {
      console.log('authorize error', e)
      return e
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      local.removeItem(TOKEN_KEY).then(res => {
        resolve(true)
      }).catch(e => {
        reject(e)
      })
    })
  }
}
