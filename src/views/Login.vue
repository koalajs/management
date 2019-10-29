<template>
  <div>
    Login
    <button @click="login">Login</button>
  </div>
</template>

<script>
import login from '@/models/login'
export default {
  methods: {
    login () {
      login.setToken(new Date().getTime())
    }
  }
}
</script>
