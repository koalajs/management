<template>
  <div class="panel-box">
    <el-row class="header">
      <el-col :span="8" class="header-left">
        <slot name="header-left" />
      </el-col>
      <el-col :span="8" class="header-center">
        <slot name="header-center" />
      </el-col>
      <el-col :span="8" class="header-right">
        <slot name="header-right" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24" class="content">
        <slot />
      </el-col>
      <el-col :span="24" class="footer">
        <slot name="footer" />
      </el-col>
    </el-row>
  </div>
</template>

<style lang="stylus" scoped>
.panel-box
  border-radius 5px
  background-color #FFF
  .header
    border-bottom 3px solid #ebece3
    min-height 3rem
    padding 0.5rem
    width 100%
  .header-left
    text-align left
    padding-left 0.5rem
</style>
