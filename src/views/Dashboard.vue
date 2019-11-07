<template>
  <div class="dashboard">
    <el-row class="row-body">
      <el-col :span="24">
        <panel-box>
          <div slot="header-left" class="dashboard-title">{{$t('dashboard.title')}}</div>
          <div class="dashboard-body">
            <h1> Welcome! </h1>
          </div>
        </panel-box>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import PanelBox from '@/components/PanelBox'
import { onMounted } from '@vue/composition-api'
export default {
  components: {
    PanelBox
  },
  setup (props, { root }) {
    onMounted(() => {
      document.title = root.$t('dashboard.title')
    })
  }
}
</script>

<style lang="stylus" scoped>
.dashboard
  padding 0
  .dashboard-title
    line-height 2rem
    max-height 2rem
    text-align left
  .dashboard-body
    min-height 85vh
</style>
