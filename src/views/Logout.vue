<template>
  <div>logout</div>
</template>

<script>
import loginModel from '@/models/login'
import { onMounted } from '@vue/composition-api'

export default {
  setup (props, { root }) {
    const doLogout = () => {
      loginModel.logout()
      // TODO 该行会导致一个handler.call is not a function的问题.
      root.$router.replace('/')
    }
    onMounted(doLogout())
  }
}
</script>
