<template>
  <div class="version">
    Version: {{v}}
  </div>
</template>

<script>
import { version } from '../../package.json'
import { computed } from '@vue/composition-api'
export default {
  setup () {
    const v = computed(() => version)
    return {
      v
    }
  }
}
</script>
<style lang="stylus" scoped>
.version
  position absolute
  bottom 2rem
  right 2rem
</style>
