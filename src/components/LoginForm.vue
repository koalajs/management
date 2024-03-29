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
import loginModel from '@/models/loginModel'
import { SchemaModel, StringType } from 'schema-typed'
import { reduce, reduced, values, propOr } from 'ramda'
import { ref, reactive, computed } from '@vue/composition-api'
import { CMS_DASHBOARD } from '@/common/routers'
import { getErrorMessage } from '@/common/utils'
export default {
  name: 'LoginForm',
  setup (props, { root }) {
    const loginData = reactive({
      username: 'tenfold',
      password: '123'
    })
    const isRequesting = ref(false)
    const btnLoginStatus = computed(() => {
      return isRequesting.value
    })
    const setIsRequest = (b) => (isRequesting.value = b)
    const checkData = (data) => {
      const mod = SchemaModel({
        username: StringType().isRequired(root.$t('login.need_username')),
        password: StringType().isRequired(root.$t('login.need_password'))
      })
      const result = mod.check(data)
      return reduce((a, v) => v.hasError ? reduced(v) : v, {}, values(result))
    }
    const getData = (data) => {
      return {
        ad_domain: 'WP',
        ip: '12.12.12.12',
        local_machine: 'pc',
        password: data.password,
        platform: 'PAD',
        property: 'WP',
        userdn: data.username
      }
    }
    const getToken = res => propOr([], 'token', res.data.data)
    const getRoles = res => propOr([], 'roles', res.data.data)
    const getTimeout = res => propOr(30, 'timeout', res.data.data)
    const doLogin = () => {
      const result = checkData(loginData)
      if (result.hasError) {
        root.$message({
          message: result.errorMessage,
          type: 'error'
        })
      } else {
        setIsRequest(true)
        loginModel.login(getData(loginData)).then(async res => {
          root.$message({
            message: root.$t('login.login_success'),
            type: 'success'
          })
          await loginModel.setToken(getToken(res))
          await loginModel.setRoles(getRoles(res))
          await loginModel.setTimeout(getTimeout(res))
          await loginModel.setLastActive()
          setIsRequest(false)
          jumpTo(CMS_DASHBOARD)
        }).catch(e => {
          setIsRequest(false)
          root.$message({
            message: getErrorMessage(e),
            type: 'error'
          })
        })
      }
    }
    const jumpTo = (uri) => {
      root.$router.replace(uri)
    }
    return {
      loginData,
      isRequesting,
      btnLoginStatus,
      setIsRequest,
      checkData,
      getData,
      doLogin
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
