<template>
  <PageBox class="dashboard">
    <div slot="title">{{$t('dashboard.title')}}</div>
    <div class="dashboard-body">
      <h1>Welcome!</h1>
      <files
        @onChoose="choose"
      />
      <div>{{msg}}</div>
    </div>
  </PageBox>
</template>

<script>
import PageBox from '@/components/PageBox'
import Files from '@/components/files/Files'
export default {
  components: {
    PageBox,
    Files
  },
  data () {
    return {
      msg: ''
    }
  },
  methods: {
    choose (e) {
      console.log('show url', e)
      this.msg = e
    }
  }
}
</script>

<style lang="stylus" scoped>
.dashboard
  padding 0
  .dashboard-body
    min-height 78vh
</style>
