<template>
  <el-container>
    <el-row class="menu">
      <el-col :span="24">
        <img src="@/assets/logo.png" class="logo" />
      </el-col>
      <el-col :span="24">
        <el-menu
          default-active="1"
          background-color="#661a1a"
          text-color="#fff"
          active-text-color="#ffd04b"
        >
          <template v-for="(r) in list">
            <el-submenu v-if="hasChildren(r)" :key="getRowID(r)" :index="getRowID(r)">
              <template slot="title">
                <i :class="getIcon(r)"></i>
                <span>{{getTitle(r)}}</span>
              </template>
              <el-menu-item-group>
                <el-menu-item v-for="(rr) in getChildren(r)" :key="getRowID(rr)" :index="getRowID(rr)">
                  {{getTitle(rr)}}
                </el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item v-else :key="getRowID(r)" :index="getRowID(r)" @click="openURI(getURI(r))">
              <template slot="title">
                <i :class="getIcon(r)"></i>
                <span>{{getTitle(r)}}</span>
              </template>
            </el-menu-item>
          </template>
        </el-menu>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
import menuConfig from '@/config/menuConfig'
import { has, propOr } from 'ramda'
import local from '@/plugins/local'
import { ROLES_KEY } from '@/common/consts'
export default {
  computed: {
    list: function () {
      return menuConfig
    }
  },
  data () {
    return {
      get roles () {
        local.getItem(ROLES_KEY).then(res => {
          return res
        }).catch(e => {
          return []
        })
      }
    }
  },
  methods: {
    hasRole (row) {
      return this.roles.includes(this.getRole(row))
    },
    hasChildren (row) {
      return has('children', row)
    },
    getChildren (row) {
      return propOr([], 'children', row)
    },
    getRowID (row) {
      return row.id
    },
    getTitle (row) {
      return this.$t(row.title)
    },
    getIcon (row) {
      return row.icon
    },
    getRole (row) {
      return propOr('', 'role', row)
    },
    getURI (row) {
      return row.uri
    },
    openURI (uri) {
      this.$router.push(uri)
    }
  }
}
</script>

<style lang="stylus" scoped>
.menu
  border 0
  .logo
    height 15rem
    width 14rem
    border 0
  .el-menu
    border 0
    border-top 1px solid #ecebe3
    padding-top 2rem
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
