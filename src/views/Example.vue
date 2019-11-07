<template>
  <div>
    <el-row>
      <el-col :span="3">
        <h5>删除确认组合按钮</h5>
        <delete-button
          size="small"
          :loading="load"
          @onSubmit="doDelete"
          :disabled="false"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import DeleteButton from '@/components/DeleteButton'
import { ref } from '@vue/composition-api'
export default {
  components: {
    DeleteButton
  },
  setup (props, { root }) {
    const load = ref(false)
    const doDelete = () => {
      load.value = true
      setTimeout(() => {
        load.value = false
        root.$message({
          message: '删除完成',
          type: 'success'
        })
      }, 2000)
    }
    return {
      doDelete,
      load
    }
  }
}
</script>
