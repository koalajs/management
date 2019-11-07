<template>
  <div>
    <el-popover
      placement="top"
      width="300"
      v-model="visible"
    >
      <p>{{$t('common.delete_message')}}</p>
      <div class="popover-action">
        <el-button
          size="mini"
          type="text"
          @click="doCancel"
        >{{$t('common.btn_cancel')}}</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="doSubmit"
        >{{$t('common.btn_sure')}}</el-button>
      </div>
      <el-button
        slot="reference"
        type="danger"
        icon="el-icon-delete"
        :size="size"
        :round="round"
        plain
        :loading="loading"
        :disabled="disabled"
      ></el-button>
    </el-popover>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  props: {
    size: String,
    round: Boolean,
    loading: Boolean,
    disabled: Boolean
  },
  setup (props, { emit }) {
    const visible = ref(false)
    const doCancel = () => {
      visible.value = false
    }
    const doSubmit = () => {
      visible.value = false
      emit('onSubmit')
    }
    return {
      visible,
      doCancel,
      doSubmit
    }
  }
}
</script>

<style lang="stylus" scoped>
.popover-action
  text-align right
  margin 0
</style>
