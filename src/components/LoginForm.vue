<template>
  <div class="login-form">
    <el-row>
      <el-col><h1>{{$t('main.title')}}</h1></el-col>
    </el-row>
    <el-row>
      <el-col>
        <el-input
          :placeholder="$t('login.username')"
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
          :placeholder="$t('login.password')"
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
          > {{$t('login.login_btn')}} </el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import loginModel from '@/models/login'
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
        username: 'tenfold',
        password: '123'
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
      this.isRequesting = b
    },
    checkData (data) {
      const mod = SchemaModel({
        username: StringType().isRequired(this.$t('login.need_username')),
        password: StringType().isRequired(this.$t('login.need_password'))
      })
      const result = mod.check(data)
      console.log('show result', result)
      return reduce((a, v) => v.hasError ? reduced(v) : v, {}, values(result))
    },
    getData (data) {
      return {
        ad_domain: 'WP',
        ip: '12.12.12.12',
        local_machine: 'pc',
        password: data.password,
        platform: 'PAD',
        property: 'WP',
        userdn: data.username
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
        loginModel.login(this.getData(this.loginData)).then(res => {
          this.$message({
            message: this.$t('login.login_success'),
            type: 'success'
          })
          this.setIsRequest(false)
          this.jumpTo('/cms/dashboard')
        }).catch(e => {
          this.setIsRequest(false)
          this.$message({
            message: this.$t('login.login_failed'),
            type: 'error'
          })
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
