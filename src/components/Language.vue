<template>
  <el-container class="language">
    <el-row>
      <el-col>
        <el-select
          v-model="lang"
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
import i18n from '@/plugins/i18n'
export default {
  data () {
    return {
      lang: 'zh_cn',
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
  mounted () {
    this.initLanguage()
  },
  methods: {
    initLanguage () {
      this.lang = i18n.locale
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
