<template>
  <div class="admin-add">
    <PageBox>
      <div slot="title">{{$t('menu.admin_add')}}</div>
      <AddAdmin
        :item="item"
        @save="doSave"
      />
    </PageBox>
  </div>
</template>

<script>
import PageBox from '@/components/PageBox'
import AddAdmin from '@/components/admin/AddAdmin'
import AdminModel from '@/models/adminModel'
import { ref } from '@vue/composition-api'
export default {
  components: {
    PageBox,
    AddAdmin
  },
  setup () {
    const item = ref(AdminModel)
    const doSave = d => console.log('show save data 2', d)
    return {
      item,
      doSave
    }
  }
}
</script>
