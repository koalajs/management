<template>
  <div class="home"></div>
</template>

<script>
import loginModel from '@/models/loginModel'
import { onMounted } from '@vue/composition-api'
import { CMS_DASHBOARD, CMS_LOGIN } from '@/common/routers'
export default {
  name: 'home',
  setup (props, { root }) {
    const jumpTo = uri => root.$router.replace(uri)
    const checkLogin = async () => {
      const res = await loginModel.isLogin()
      res ? jumpTo(CMS_DASHBOARD) : jumpTo(CMS_LOGIN)
    }
    onMounted(checkLogin())
  }
}
</script>
