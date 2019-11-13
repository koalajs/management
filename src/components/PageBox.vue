<template>
  <div class="page-box">
    <el-row class="row-body">
      <el-col :span="24">
        <panel-box>
          <div slot="header-left">
            <slot name="title" />
          </div>
          <div slot="header-left">
            <slot name="actions" />
          </div>
          <div class="body">
            <slot />
          </div>
          <div class="footer" slot="footer">
            <slot name="footer" />
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
