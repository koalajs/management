<template>
  <div class="admin-add">
    <PageBox>
      <div slot="title">{{$t('menu.admin_add')}}</div>
      <Save />
    </PageBox>
  </div>
</template>

<script>
import PageBox from '@/components/PageBox'
import Save from '@/components/admin/Save'
export default {
  name: 'admin-add',
  components: {
    PageBox,
    Save
  }
}
</script>
