import Mockjs from 'mockjs'

export default (config) => {
  return [200, Mockjs.mock({
    'status': 'success'
  })]
}
