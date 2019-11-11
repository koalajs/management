<template>
  <el-table
    :data="data"
    style="100%"
    height="73vh"
  >
    <el-table-column
      v-for="r in cols"
      :key="r.key"
      :prop="r.key"
      :label="r.label"
      :sortable="r.sortable"
      :width="r.width"
    />
    <el-table-column v-if="isChangeStatus" :label="$t('common.status')">
      <template slot-scope="scope">
        <el-select
          :value="scope.row.status"
          @change="(e) => doChangeStatus(e, scope)"
          size="small"
        >
          <el-option
            v-for="i in status"
            :key="i.value"
            :label="$t(i.label)"
            :value="i.value"
          />
        </el-select>
      </template>
    </el-table-column>
    <el-table-column :label="$t('common.actions')" v-if="isActions">
      <template slot-scope="scope">
        <el-button
          @click="doEdit(scope)"
          class="btn-edit"
          size="small"
          icon="el-icon-edit"
        > {{$t('common.btn_edit')}} </el-button>
        <DeleteButton
          size="small"
          @onSubmit="doDelete(scope)"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { filter, equals } from 'ramda'
import DeleteButton from '@/components/DeleteButton'
export default {
  components: {
    DeleteButton
  },
  props: {
    data: Array,
    cols: Array,
    status: Array,
    isChangeStatus: Boolean,
    isActions: Boolean
  },
  setup (props, { root, emit }) {
    const doEdit = s => console.log('show edit', s)
    const showStatusString = (s) => root.$t((filter((i) => equals(i.value, 1), props.status))[0].label)
    const doChangeStatus = (e, s) => emit('onChangeStatus', e, s)
    const doDelete = s => emit('onDelete', s)
    return {
      doEdit,
      doChangeStatus,
      doDelete,
      showStatusString
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-edit
  margin-right 0.5rem
.el-select
  width 6rem
  max-width 20rem
</style>
