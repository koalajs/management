<template>
  <div id="app" @click="doClick">
    <router-view/>
  </div>
</template>

<script>
import { ref, onMounted } from '@vue/composition-api'
import loginModel from '@/models/loginModel'
import { IS_TIMEOUT } from '@/common/consts'
import { CMS_LOGIN } from '@/common/routers'
export default {
  setup (props, { root }) {
    const ck = ref(null)
    onMounted(() => {
      ck.value = setInterval(async () => {
        const res = await loginModel.checkTimeout()
        if (res.result) {
          // 1. 不在login 页面, 跳转
          if (root.$route.path !== CMS_LOGIN) {
            root.$router.replace(CMS_LOGIN)
          }
          // 2. timeout 给提示， not login不用提示。
          if (res.status === IS_TIMEOUT) {
            root.$message({
              message: root.$t('login.timeout'),
              type: 'error'
            })
          }
        }
      }, 5000)
    })
    const doClick = (e) => console.log('do click', e)
    return {
      doClick
    }
  }
}
</script>

<style lang="stylus">
body
  margin 0
  padding 0
#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin 0
  padding 0
</style>
