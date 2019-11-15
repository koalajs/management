<template>
  <el-form ref="form" :model="data" :rules="rules" label-width="100px" class="add-admin">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="data.name"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="data.phone"></el-input>
    </el-form-item>
    <el-form-item label="权限管理">
      <el-transfer
        :titles="['可选权限', '已有权限']"
        filterable
        :filter-method="filterMethod"
        filter-placeholder="请输入拼音"
        v-model="data.rules"
        :data="roles">
      </el-transfer>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="doSave('form')">{{$t('common.btn_save')}}</el-button>
      <el-button @click="resetForm('form')">{{$t('common.btn_reset')}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive, ref } from '@vue/composition-api'
import rolesConfig from '@/config/rolesConfig'
import { reject, includes } from 'ramda'
export default {
  props: {
    item: Object,
    rules: Object
  },
  setup (props, { emit, refs }) {
    const data = reactive(props.item)
    const getRoles = (all, has) => reject(item => includes(item.key, all), all)
    const roles = ref(getRoles(rolesConfig, data.roles))
    const resetForm = f => {
      refs['form'].resetFields()
    }
    const doSave = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          emit('onSave', data)
        } else {
          return false
        }
      })
    }
    const filterMethod = (query, item) => {
      return item.pinyin.indexOf(query) > -1
    }
    return {
      data,
      roles,
      doSave,
      resetForm,
      filterMethod
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-admin
  margin 2rem
  width 70%
.el-transfer
  text-align left
</style>
