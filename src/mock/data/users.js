
import Mockjs from 'mockjs'

export default (config) => {
  return [200, Mockjs.mock({
    'status': 'success',
    'data|3-9': [
      {
        'id|+1': 1,
        'name': '@cname'
      }
    ]
  })]
}
