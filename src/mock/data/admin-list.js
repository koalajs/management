import Mockjs from 'mockjs'

export default (config) => {
  return [200, Mockjs.mock({
    'status': 'success',
    'data|23-29': [
      {
        'id|+1': 1,
        'name': '@cname',
        'status|0-1': 1
      }
    ]
  })]
}
