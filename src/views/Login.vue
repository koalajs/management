<template>
  <el-container>
    <el-aside width="25vw">
    </el-aside>
    <el-main>
      <login-form />
    </el-main>
    <language />
  </el-container>
</template>

<script>
import LoginForm from '@/components/LoginForm'
import Language from '@/components/Language'
export default {
  components: {
    LoginForm,
    Language
  }
}
</script>

<style lang="stylus" scoped>
.el-container
  height 100vh
  margin 0
  padding 0
.el-aside
  background-color #661a1a
.el-main
  width 75vw
  margin auto
  padding-left 10rem
</style>
