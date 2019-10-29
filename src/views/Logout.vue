<template>
  <div>logout</div>
</template>

<script>
import login from '@/models/login'
export default {
  mounted () {
    this.doLogout()
  },
  methods: {
    doLogout () {
      login.logout().then(res => {
        this.$message({
          message: '成功退出系统',
          type: 'success'
        })
        this.$router.replace('/')
      }).catch(e => {
        this.$message({
          message: '退出系统出现错误',
          type: 'error'
        })
        console.log('logout error:', e)
      })
    }
  }
}
</script>
