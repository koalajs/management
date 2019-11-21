import api from '@/plugins/api'
import { isNil } from 'ramda'
export default {
  data: {},
  init: {
    id: null,
    name: '',
    phone: '',
    roles: ['cms.admin'],
    status: 1
  },
  rules: {
    name: [
      { required: true, message: '姓名不能为空', trigger: 'blur' },
      { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
    ],
    phone: [
      { required: true, message: '手机号不能为空', trigger: 'blur' },
      { len: 11, message: '必须是一个合法的手机号', trigger: 'blur' }
    ]
  },
  save (d) {
    return isNil(d.id) ? this.create(d) : this.update(d)
  },
  update (d) {
    return api.post('admin', d)
  },
  create (d) {
    return api.post('admin', d)
  },
  delete (id) {
    return api.delete(`admin/${id}`)
  },
  getItemByID (id) {
    return api.get(`admin/${id}`)
  }
}
