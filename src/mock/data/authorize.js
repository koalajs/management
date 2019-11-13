import Mockjs from 'mockjs'
import rules from '@/config/rulesConfig'
import { reduce, append } from 'ramda'

export default (config) => {
  return [
    200,
    Mockjs.mock({
      status: 'success',
      data: {
        token: '@string(67)',
        roles: reduce((a, v) => append(v.key, a), [], rules),
        timeout: 30
      }
    })
  ]
}
