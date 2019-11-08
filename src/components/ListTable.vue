<template>
  <el-table
    :data="data"
    style="100%"
    height="73vh"
  >
    <el-table-column
      prop="id"
      label="ID"
      sortable
    />
    <el-table-column
      prop="name"
      label="Name"
      sortable
    />
    <el-table-column
      label="状态"
      sortable
    >
      <template slot-scope="scope">
        <el-switch
          :value="scope.row.status"
          active-color="#13ce66"
          inactive-color="#661a1a"
          @change="doChangeStatus(scope)"
        />
      </template>
    </el-table-column>
    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          @click="doEdit(scope)"
          class="btn-edit"
          size="small"
          icon="el-icon-edit"
        > {{$t('btn.edit')}} </el-button>
        <DeleteButton
          size="small"
          @onSubmit="doDelete(scope)"
        />
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import DeleteButton from '@/components/DeleteButton'
export default {
  components: {
    DeleteButton
  },
  props: {
    data: Array
  },
  setup (props, { roow, emit }) {
    const doEdit = s => console.log('show edit', s)
    const doChangeStatus = s => emit('onChangeStatus', s)
    const doDelete = s => emit('onDelete', s)
    return {
      doEdit,
      doChangeStatus,
      doDelete
    }
  }
}
</script>

<style lang="stylus" scoped>
.btn-edit
  margin-right 0.5rem
</style>
