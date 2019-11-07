<template>
  <div id="cms">
    <el-container>
      <el-aside width="20rem">
        <Menu />
      </el-aside>
      <el-main class="k-bg-primary">
        <router-view/>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import Menu from '@/components/Menu'
export default {
  components: {
    Menu
  }
}
</script>

<style lang="stylus" scoped>
.el-aside
  height 100vh
  background-color #661a1a
.el-main
  height 100vh
  max-height 100vh
</style>
