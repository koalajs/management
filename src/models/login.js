import localForage from 'localforage'
import { TOKEN_KEY } from './consts.js'
export default {
  isLogin () {
    return new Promise((resolve, reject) => {
      localForage.getItem(TOKEN_KEY).then(res => {
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
    localForage.setItem(TOKEN_KEY, token).then(res => {
      return true
    }).catch(e => {
      return false
    })
  },
  getToken () {
    return new Promise((resolve, reject) => {
      localForage.getItem(TOKEN_KEY).then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  },
  login (data) {
    return new Promise((resolve, reject) => {
      // 在这里进行axios操作
      resolve(true)
    })
  },
  logout () {
    return new Promise((resolve, reject) => {
      localForage.removeItem(TOKEN_KEY).then(res => {
        resolve(true)
      }).catch(e => {
        reject(e)
      })
    })
  }
}
