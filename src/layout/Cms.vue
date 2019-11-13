<template>
  <div id="cms">
    <el-container>
      <el-header>
        <Header />
      </el-header>
      <el-container>
        <el-aside width="12.5vw">
          <Menu />
        </el-aside>
        <el-main class="k-bg-primary">
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
import Header from '@/components/Header'
export default {
  components: {
    Menu,
    Header
  }
}
</script>

<style lang="stylus" scoped>
.el-aside
  height 92vh
  max-width 92vh
  background-color #661a1a
.el-header
  height 8vh
  min-height 8vh
  max-height 8vh
  border-bottom 1px solid #661a1a
  padding 0
.el-main
  height 92vh
  max-height 92vh
</style>
