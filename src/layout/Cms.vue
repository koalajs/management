<template>
  <div id="cms">
    <el-container>
      <el-aside width="15rem">
        <Menu />
      </el-aside>
      <el-container>
        <el-header>
          <language />
        </el-header>
        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Language from '@/components/Language'
export default {
  components: {
    Menu,
    Language
  }
}
</script>

<style lang="stylus" scoped>
.el-aside
  height 100vh
  background-color #661a1a
.el-header
  height 8vh
  border-bottom 1px solid #dcdcdc
.el-main
  height 92vh
  max-height 92vh
</style>
