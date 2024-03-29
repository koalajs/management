import axios from 'axios'
import local from '@/plugins/local'
import config from '@/config/urlConfig'
import { TOKEN_KEY } from '@/common/consts'

let api = axios.create({
  baseURL: config.apiURL
})

api.setBaseURL = function (url) {
  this.defaults.baseURL = url
}

api.setToken = function () {
  local.getItem(TOKEN_KEY).then(res => {
    if (res) {
      this.defaults.headers.common['Authorization'] = res
    }
  })
}

// api.interceptors.request.use((config) => {
//   console.log('show api interceptors', config)
//   return config
// }, (err) => {
//   console.log('show api interceptors error', err)
// })

const setup = function (api) {
  api.setToken()
}

setup(api)

export default api
