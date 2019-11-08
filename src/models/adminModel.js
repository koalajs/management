import api from '@/plugins/api'

export default {
  getList () {
    return api.get('admin')
  }
}
