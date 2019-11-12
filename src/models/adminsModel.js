import api from '@/plugins/api'

export default {
  getList () {
    return api.get('admin')
  },
  changeStatus (id) {
    return api.put(`admin/status/${id}`)
  }
}
