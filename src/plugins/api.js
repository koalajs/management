import axios from 'axios'
import local from '@/plugins/local'
import config from '@/config'
import { TOKEN_KEY } from '@/common/consts'

let api = axios.create({
  baseURL: config.apiURL
})

api.setBaseURL = function (url) {
  this.defaults.baseURL = url
}

api.setToken = function (token) {
  local.getItem(TOKEN_KEY).then(res => {
    this.defaults.headers.common['Authorization'] = res
  })
}

const setup = function (api) {
  api.setToken()
}

setup(api)

export default api
