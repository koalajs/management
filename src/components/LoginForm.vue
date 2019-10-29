<template>
  <div class="login-form">
    <el-row>
      <el-col><h1>{{title}}</h1></el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input
          placeholder="Username"
          v-model="loginData.username"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input
          type="password"
          placeholder="Password"
          v-model="loginData.password"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button
          type="primary"
          @click="doLogin"
          :loading="btnLoginStatus"
        > 登 录 </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import login from '@/models/login'
export default {
  name: 'LoginForm',
  props: {
    title: String
  },
  data () {
    return {
      loginData: {
        username: '',
        password: ''
      },
      isRequesting: false
    }
  },
  computed: {
    btnLoginStatus: function () {
      return this.isRequesting
    }
  },
  methods: {
    setIsRequest (b) {
      console.log('???', b)
      this.isRequesting = b
    },
    checkData (data) {
      return {
        hasError: false,
        errorMessage: 'xxx'
      }
    },
    doLogin () {
      const result = this.checkData(this.loginData)
      if (result.hasError) {
        this.$message({
          message: result.errorMessage,
          type: 'error'
        })
      } else {
        this.setIsRequest(true)
        login.login(this.loginData).then(res => {
          this.$message({
            message: result.errorMessage,
            type: 'success'
          })
          this.setIsRequest(false)
          this.jumpTo('/dashboard')
        })
      }
    },
    jumpTo (uri) {
      this.$router.replace(uri)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.login-form
  width 20rem
  text-align left
.el-row
  line-height 4rem
</style>
