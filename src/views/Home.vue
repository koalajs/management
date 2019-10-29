<template>
  <div class="home">
    <button @click="login">Login</button>
  </div>
</template>

<script>
import login from '@/models/login'
export default {
  name: 'home',
  mounted () {
    this.checkLogin()
  },
  methods: {
    checkLogin () {
      // 检查本地是否存在token的保存
      login.isLogin().then(res => {
        res ? this.jumpTo('/dashboard') : this.jumpTo('/login')
      })
    },
    jumpTo (uri) {
      this.$router.replace(uri)
    }
  }
}
</script>
