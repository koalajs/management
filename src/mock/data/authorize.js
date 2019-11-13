import Mockjs from 'mockjs'
import roles from '@/config/rolesConfig'
import { reduce, append } from 'ramda'

export default (config) => {
  return [
    200,
    Mockjs.mock({
      status: 'success',
      data: {
        token: '@string(67)',
        roles: reduce((a, v) => append(v.key, a), [], roles),
        timeout: 30
      }
    })
  ]
}
