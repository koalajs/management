<template>
  <div class="admin-list">
    <el-row class="row-body">
      <el-col :span="24">
        <panel-box>
          <div slot="header-left" class="dashboard-title">{{$t('menu.admin_list')}}</div>
          <div class="body">
            <ListTable
              :data="list"
              @onChangeStatus="doChangeStatus"
              @onDelete="doDelete"
            />
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
export default {
  name: 'admin-list',
  components: {
    PanelBox,
    ListTable
  },
  setup (props, { root }) {
    const list = ref([])
    const getList = res => res.data.data
    const doChangeStatus = s => {
      list.value[s.$index]['status'] = !list.value[s.$index]['status']
    }
    const doDelete = s => {
      console.log('删除', s)
    }
    onMounted(() => {
      adminModel.getList().then(res => {
        list.value = getList(res)
      })
    })
    return {
      list,
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
