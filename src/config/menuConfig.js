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
    'id': '7',
    'title': 'menu.promotion',
    'uri': routers.CMS_PROMOTION,
    'role': 'cms.promotion',
    'children': [
      {
        'id': '71',
        'title': 'menu.promotion_add',
        'uri': routers.CMS_PROMOTION_ADD,
        'role': 'cms.promotion.add'
      },
      {
        'id': '72',
        'title': 'menu.promotion_list',
        'uri': routers.CMS_PROMOTION_LIST,
        'role': 'cms.promotion'
      }
    ]
  },
  {
    'id': '5',
    'title': 'menu.prize',
    'uri': routers.CMS_PRIZE,
    'role': 'cms.prize',
    'children': [
      {
        'id': '51',
        'title': 'menu.prize_add',
        'uri': routers.CMS_PRIZE_ADD,
        'role': 'cms.prize.add'
      },
      {
        'id': '52',
        'title': 'menu.prize_list',
        'uri': routers.CMS_PRIZE_LIST,
        'role': 'cms.prize'
      },
      {
        'id': '53',
        'title': 'menu.prize_import',
        'uri': routers.CMS_PRIZE_IMPORT,
        'role': 'cms.prize.import'
      }
    ]
  },
  {
    'id': '6',
    'title': 'menu.game',
    'uri': routers.CMS_GAME,
    'role': 'cms.game',
    'children': [
      {
        'id': '61',
        'title': 'menu.game_add',
        'uri': routers.CMS_GAME_ADD,
        'role': 'cms.game.add'
      },
      {
        'id': '62',
        'title': 'menu.game_list',
        'uri': routers.CMS_GAME_LIST,
        'role': 'cms.game'
      }
    ]
  },
  {
    'id': '4',
    'title': 'menu.location',
    'uri': routers.CMS_LOCATION,
    'role': 'cms.location',
    'children': [
      {
        'id': '41',
        'title': 'menu.location_add',
        'uri': routers.CMS_LOCATION_ADD,
        'role': 'cms.location.add'
      },
      {
        'id': '42',
        'title': 'menu.location_list',
        'uri': routers.CMS_LOCATION_LIST,
        'role': 'cms.location'
      }
    ]
  },
  {
    'id': '8',
    'title': 'menu.logs',
    'uri': routers.CMS_LOGS,
    'role': 'cms.logs'
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
  },
  {
    'id': '2',
    'title': 'menu.system',
    'icon': 'el-icon-s-ticket',
    'uri': routers.CMS_SYSTEM,
    'role': 'cms.system'
  }
]
