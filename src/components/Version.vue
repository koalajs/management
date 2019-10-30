<template>
  <div class="version">
    Version: {{version}}
  </div>
</template>

<script>
import { version } from '../../package.json'
export default {
  computed: {
    version: function () {
      return version
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
