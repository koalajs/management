<template>
  <div>
    <el-input v-model="data.name" @input="doChangeName" />
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  props: {
    item: Object
  },
  setup (props) {
    const data = ref(props.item)
    const doChangeName = n => (data.value.name = n)
    return {
      data,
      doChangeName
    }
  }
}
</script>
