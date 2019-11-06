<template>
  <el-container class="dashboard">
    <el-row class="row-body">
      <el-col :span="24" class="k-bg-purple-dark">
        <panel-box>
          <div slot="header-left">Dashboard</div>
          <p>ceshi</p>
        </panel-box>
      </el-col>
    </el-row>
  </el-container>
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
  border 1px solid yellow
  .row-body
    border 1px solid red
</style>
