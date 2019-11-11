<template>
  <div class="admin-list">
    <el-row class="row-body">
      <el-col :span="24">
        <panel-box>
          <div slot="header-left" class="dashboard-title">{{$t('menu.admin_list')}}</div>
          <div class="body">
            <ListTable
              :data="list"
              :cols="cols"
              :status="statusList"
              :isChangeStatus="true"
              :isActions="true"
              @onChangeStatus="doChangeStatus"
              @onDelete="doDelete"
            >
            </ListTable>
          </div>
          <div slot="footer" class="footer">
            <el-pagination
              background
              layout="prev, pager, next"
              :total="1000"
            />
          </div>
        </panel-box>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelBox from '@/components/PanelBox'
import ListTable from '@/components/ListTable'
import { ref, onMounted } from '@vue/composition-api'
import adminModel from '@/models/adminModel'
import { getErrorMessage } from '@/common/utils'
import statusConfig from '@/config/statusConfig'
export default {
  name: 'admin-list',
  components: {
    PanelBox,
    ListTable
  },
  setup (props, { root }) {
    const list = ref([])
    const cols = ref([
      { key: 'id', label: 'ID', sortable: true, width: '50px' },
      { key: 'name', label: '名称', sortable: true, width: '480px' }
    ])
    const statusList = ref(statusConfig)
    const getList = res => res.data.data
    const doChangeStatus = (e, s) => {
      adminModel.changeStatus(s.row.id, e).then(res => {
        list.value[s.$index]['status'] = e
        root.$message({
          message: root.$t('common.action_success'),
          type: 'success'
        })
      }).catch(e => {
        root.$message({
          message: getErrorMessage(e),
          type: 'error'
        })
      })
    }
    const doDelete = s => {
      adminModel.delete(s.row.id).then(res => {

      })
    }
    onMounted(() => {
      adminModel.getList().then(res => {
        list.value = getList(res)
      })
    })
    return {
      list,
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
