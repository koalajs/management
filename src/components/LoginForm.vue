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
          :clearable="true"
          prefix-icon="el-icon-user"
          autofocus
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input
          type="password"
          placeholder="Password"
          v-model="loginData.password"
          :clearable="true"
          :show-password="true"
          prefix-icon="el-icon-star-off"
        />
      </el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-button
          ref="btn"
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
import { SchemaModel, StringType } from 'schema-typed'
import { reduce, reduced, values } from 'ramda'
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
      const mod = SchemaModel({
        username: StringType().isRequired('用户名是必须的'),
        password: StringType().isRequired('密码是必须的')
      })
      const result = mod.check(data)
      console.log('show result', result)
      return reduce((a, v) => v.hasError ? reduced(v) : v, {}, values(result))
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
