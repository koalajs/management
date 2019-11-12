<template>
  <PageBox class="dashboard">
    <div slot="title">{{$t('dashboard.title')}}</div>
    <div class="dashboard-body">
      <h1>Welcome!</h1>
    </div>
  </PageBox>
</template>

<script>
import PageBox from '@/components/PageBox'
export default {
  components: {
    PageBox
  }
}
</script>

<style lang="stylus" scoped>
.dashboard
  padding 0
  .dashboard-body
    min-height 78vh
</style>
