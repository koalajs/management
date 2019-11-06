import Mockjs from 'mockjs'
export default (config) => {
  return [
    200,
    Mockjs.mock({
      status: 'success',
      data: {
        id: '@natural(1, 1000)',
        name: '@cname'
      }
    })
  ]
}
