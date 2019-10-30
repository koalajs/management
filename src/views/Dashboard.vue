<template>
  <div>
    Dashboard <el-button type="primary" @click="$router.replace('/logout')">Logout</el-button>
  </div>
</template>

<script>
import login from '@/models/login'
export default {
  mounted () {
    this.test()
  },
  methods: {
    test () {
      login.login({}).then(res => {
        console.log('show login again')
      }).catch(e => {
        console.log('show login again error')
      })
    }
  }
}
</script>
