import Mockjs from 'mockjs'

export default (config) => {
  return [
    200,
    Mockjs.mock({
      status: 'success',
      data: {
        token: '@string(67)',
        roles: ['cms.system', 'cms.admin', 'cms.admin.add', 'cms.admin.list'],
        timeout: 10
      }
    })
  ]
}
