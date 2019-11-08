import * as routers from '@/common/routers'
export default [
  {
    'id': '1',
    'title': 'menu.dashboard',
    'icon': 'el-icon-s-home',
    'uri': routers.CMS_DASHBOARD,
    'role': 'cms.dashboard'
  },
  {
    'id': '2',
    'title': 'menu.system',
    'icon': 'el-icon-s-ticket',
    'uri': routers.CMS_SYSTEM,
    'role': 'cms.system'
  },
  {
    'id': '3',
    'title': 'menu.admin',
    'icon': 'el-icon-s-custom',
    'uri': routers.CMS_ADMIN,
    'role': 'cms.admin',
    'children': [
      {
        'id': '31',
        'title': 'menu.admin_add',
        'uri': routers.CMS_ADMIN_ADD,
        'role': 'cms.admin.add'
      },
      {
        'id': '32',
        'title': 'menu.admin_list',
        'uri': routers.CMS_ADMIN_LIST,
        'role': 'cms.admin.list'
      }
    ]
  }
]
