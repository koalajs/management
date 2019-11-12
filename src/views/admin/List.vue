<template>
  <div class="admin-list">
    <PageBox>
      <div slot="title">{{$t('menu.admin_list')}}</div>
      <ListTable
        :data="list"
        :cols="cols"
        :status="statusList"
        :isChangeStatus="true"
        :isActions="true"
        @onChangeStatus="doChangeStatus"
        @onDelete="doDelete"
      ></ListTable>
      <div slot="footer" class="footer">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="total"
        />
      </div>
    </PageBox>
  </div>
</template>

<script>
import PageBox from '@/components/PageBox'
import ListTable from '@/components/ListTable'
import { ref, onMounted } from '@vue/composition-api'
import adminsModel from '@/models/adminsModel'
import { getErrorMessage } from '@/common/utils'
import statusConfig from '@/config/statusConfig'
export default {
  name: 'admin-list',
  components: {
    PageBox,
    ListTable
  },
  setup (props, { root }) {
    const list = ref([])
    const total = ref(10)
    const cols = ref([
      { key: 'id', label: 'ID', sortable: true, width: '80px' },
      { key: 'name', label: '名称', sortable: true, width: '480px' }
    ])
    const statusList = ref(statusConfig)
    const getList = res => res.data.data
    const doChangeStatus = (e, s) => {
      adminsModel
        .changeStatus(s.row.id, e)
        .then(res => {
          list.value[s.$index]['status'] = e
          root.$message({
            message: root.$t('common.action_success'),
            type: 'success'
          })
        })
        .catch(e => {
          root.$message({
            message: getErrorMessage(e),
            type: 'error'
          })
        })
    }
    const doDelete = s => {
      adminsModel.delete(s.row.id).then(res => {})
    }
    onMounted(() => {
      adminsModel.getList().then(res => {
        list.value = getList(res)
      })
    })
    return {
      list,
      total,
      cols,
      statusList,
      doChangeStatus,
      doDelete
    }
  }
}
</script>

<style lang="stylus" scoped>
.body
  padding 0.5rem
  max-height 73vh
  overflow hidden
.footer
  padding-top 1rem
  line-height 2rem
  padding-bottom 1rem
  height 2rem
</style>
