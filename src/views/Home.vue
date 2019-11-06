<template>
  <div class="home"></div>
</template>

<script>
import loginModel from '@/models/login'
import { onMounted } from '@vue/composition-api'
export default {
  name: 'home',
  setup (props, { root }) {
    const jumpTo = uri => root.$router.replace(uri)
    const checkLogin = async () => {
      const res = await loginModel.isLogin()
      res ? jumpTo('/dashboard') : jumpTo('/login')
    }
    onMounted(checkLogin())
  }
}
</script>
