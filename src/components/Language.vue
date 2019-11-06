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
import { ref, computed } from '@vue/composition-api'
import language from '@/config/languageConfig'
export default {
  setup (props, { root }) {
    const options = ref(language)
    const lang = computed(() => root.$i18n.locale)
    const setLanguage = (l) => root.$i18n.setLocale(l)
    const onChangeLanguge = (e) => setLanguage(e)
    return {
      options,
      lang,
      setLanguage,
      onChangeLanguge
    }
  }
}
</script>

<style lang="stylus" scoped>
.language
  position absolute
  top 0.6rem
  right 4rem
  max-height 20rem
.el-select
  width 8rem
</style>
