<template>
  <el-form ref="form" :model="data" :rules="rules" label-width="100px" class="add-admin">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="data.name"></el-input>
    </el-form-item>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="data.username"></el-input>
    </el-form-item>
    <el-form-item label="手机号" prop="phone">
      <el-input v-model="data.phone"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="doSave('form')">{{$t('common.btn_save')}}</el-button>
      <el-button @click="resetForm('form')">{{$t('common.btn_reset')}}</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { reactive } from '@vue/composition-api'
export default {
  props: {
    item: Object,
    rules: Object
  },
  setup (props, { emit, refs }) {
    const data = reactive(props.item)
    const resetForm = f => refs['form'].resetFields()
    const doSave = formName => {
      refs[formName].validate(valid => {
        if (valid) {
          emit('onSave', data)
        } else {
          return false
        }
      })
    }
    return {
      data,
      doSave,
      resetForm
    }
  }
}
</script>

<style lang="stylus" scoped>
.add-admin
  margin 2rem
  width 70vw
</style>
