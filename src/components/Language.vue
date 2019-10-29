<template>
  <el-container class="language">
    <el-row>
      <el-col>
        <el-select
          :value="lang"
          @change="onChangeLanguge"
        >
          <el-option
            v-for="i in options"
            :key="i.value"
            :label="i.label"
            :value="i.value"
          />
        </el-select>
      </el-col>
    </el-row>
  </el-container>
</template>

<script>
// import { clone } from 'ramda'
export default {
  data () {
    return {
      options: [
        {
          value: 'zh_cn',
          label: '简体中文'
        },
        {
          value: 'zh_tw',
          label: '繁体中文'
        },
        {
          value: 'en',
          label: 'Englist'
        }
      ]
    }
  },
  computed: {
    lang: function () {
      return this.$i18n.locale
    }
  },
  methods: {
    setLanguage (l) {
      // this.$i18n.locale = clone(l)
      this.$i18n.setLocale(l)
    },
    onChangeLanguge (e) {
      console.log('show change language', e)
      this.setLanguage(e)
    }
  }
}
</script>

<style lang="stylus" scoped>
.language
  position absolute
  top 2rem
  right 2rem
.el-select
  width 8rem
</style>
