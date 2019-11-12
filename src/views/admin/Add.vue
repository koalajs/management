<template>
  <div class="admin-add">
    <PageBox>
      <div slot="title">{{$t('menu.admin_add')}}</div>
      <AddAdmin
        :item="item"
        :rules="rules"
        @onSave="doSave"
      />
    </PageBox>
  </div>
</template>

<script>
import PageBox from '@/components/PageBox'
import AddAdmin from '@/components/admin/AddAdmin'
import adminModel from '@/models/adminModel'
import { reactive } from '@vue/composition-api'
import utils from '@/common/utils'
export default {
  name: 'admin-add',
  components: {
    PageBox,
    AddAdmin
  },
  setup (props, { root }) {
    const item = reactive(adminModel.data)
    const rules = reactive(adminModel.rules)
    const doSave = d => {
      adminModel.save(d).then(res => root.$message({
        message: 'good',
        type: 'success'
      })).catch(e => root.$message({
        message: utils.getErrorMessage(e),
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
