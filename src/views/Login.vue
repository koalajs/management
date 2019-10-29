<template>
  <el-container>
    <el-aside width="25vw">
    </el-aside>
    <el-main>
      <login-form title="KoalaJs" />
    </el-main>
  </el-container>
</template>

<script>
import LoginForm from '@/components/LoginForm'
export default {
  components: {
    LoginForm
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
