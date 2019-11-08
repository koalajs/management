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
export default {
  components: {
    PanelBox
  }
}
</script>

<style lang="stylus" scoped>
.dashboard
  padding 0
  .dashboard-body
    min-height 78vh
</style>
