<template>
  <div class="menu">
    <el-row>
      <el-col :span="24">
        <el-menu
          default-active="1"
          background-color="#661a1a"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="(r) in list">
            <template v-if="hasRole(r)">
            <el-submenu v-if="hasChildren(r)" :key="getRowID(r)" :index="getRowID(r)">
              <template slot="title">
                <!-- <i :class="getIcon(r)"></i> -->
                <span>{{getTitle(r)}}</span>
              </template>
              <el-menu-item-group>
                <template v-for="rr in getChildren(r)">
                  <el-menu-item v-if="hasRole(rr)" :key="getRowID(rr)" :index="getRowID(rr)" @click="openURI(getURI(rr))">
                    {{getTitle(rr)}}
                  </el-menu-item>
                </template>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :key="getRowID(r)" :index="getRowID(r)" @click="openURI(getURI(r))">
              <template slot="title">
                <!-- <i :class="getIcon(r)"></i> -->
                <span>{{getTitle(r)}}</span>
              </template>
            </el-menu-item>
            </template>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import menuConfig from '@/config/menuConfig'
import { has, propOr, union } from 'ramda'
import local from '@/plugins/local'
import { ROLES_KEY } from '@/common/consts'
import { ref, reactive, onMounted } from '@vue/composition-api'

export default {
  setup (props, { root }) {
    const list = reactive(menuConfig)
    const basicMenu = reactive(['cms.dashboard', 'cms.logout'])
    const roles = ref([])
    onMounted(() => {
      local.getItem(ROLES_KEY).then(res => {
        roles.value = addBasicRoles(res)
      }).catch(e => {
        roles.value = []
      })
    })
    const addBasicRoles = list => union(list, basicMenu)
    const hasRole = row => roles.value.includes(getRole(row))
    const getRole = row => propOr('', 'role', row)
    const hasChildren = row => has('children', row)
    const getChildren = row => propOr([], 'children', row)
    const getRowID = row => row.id
    const getTitle = row => root.$t(row.title)
    const getIcon = row => row.icon
    const getURI = row => row.uri
    const openURI = uri => root.$router.push(uri)
    return {
      list,
      roles,
      hasRole,
      getRole,
      hasChildren,
      getChildren,
      getRowID,
      getTitle,
      getIcon,
      getURI,
      openURI
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  padding-top 2rem
  border 0
  .logo
    border 1px solid #fff
    max-height 8vh
    width 14rem
    border 0
    img
      width auto
      height auto
      max-width 100%
      max-height 8vh
  .el-menu
    border 0
    width auto
    text-align left
    .is-active
      font-size 1.2rem
  .el-menu-item-group
    color #FFF
  .el-menu-item
    color #fff
  .el-menu-item:actived
    background-color #FFF
    span
      font-size 1.2rem
</style>
