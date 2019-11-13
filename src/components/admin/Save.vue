<template>
    <AddAdminForm
      :item="item"
      :rules="rules"
      @onSave="doSave"
    />
</template>

<script>
import adminModel from '@/models/adminModel'
import { ref, reactive } from '@vue/composition-api'
import { getErrorMessage } from '@/common/utils'
import AddAdminForm from '@/components/admin/AddAdminForm'
export default {
  name: 'admin-save',
  components: {
    AddAdminForm
  },
  props: {
    id: String
  },
  setup (props, { root }) {
    const item = ref({})
    if (props.id) {
      adminModel.getItemByID(props.id).then(res => {
        item.value = res.data
      }).catch(e => {
        root.$message({
          message: getErrorMessage(e),
          type: 'error'
        })
      })
    } else {
      item.value = adminModel.init
    }
    const rules = reactive(adminModel.rules)
    const doSave = d => {
      adminModel.save(d).then(res => root.$message({
        message: 'good',
        type: 'success'
      })).catch(e => root.$message({
        message: getErrorMessage(e),
        type: 'error'
      }))
    }
    return {
      item,
      rules,
      doSave
    }
  }
}
</script>
