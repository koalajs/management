import localForage from 'localforage'
export default {
  isLogin () {
    return new Promise((resolve, reject) => {
      localForage.getItem('token').then(res => {
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
    localForage.setItem('token', token).then(res => {
      return true
    }).catch(e => {
      return false
    })
  },
  getToken () {
    return new Promise((resolve, reject) => {
      localForage.getItem('token').then(res => {
        resolve(res)
      }).catch(e => {
        reject(e)
      })
    })
  }
}
