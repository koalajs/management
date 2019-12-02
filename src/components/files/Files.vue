<template>
  <div>
    <el-button @click="openDialog">选择</el-button>
    <el-dialog class="dialog" title="素材管理" :visible.sync="dialogTableVisible">
      <el-row class="dialog-header">
        <el-col :span="24">
          <el-form :inline="true">
            <el-form-item>
              <el-select v-model="category" placeholder="分类搜索">
                <el-option
                  v-for="(r, i) in categorys"
                  :key="i"
                  :label="r.title"
                  :value="r._id"
                />
              </el-select>
            </el-form-item>
            <el-form-item>
              <el-input v-model="search" placeholder="搜索标题" />
            </el-form-item>
            <el-form-item>
              <el-button>搜 索</el-button>
            </el-form-item>
          </el-form>
        </el-col>
      </el-row>
      <el-row :gutter="0" class="dialog-content">
        <el-col :span="6" class="upload">
          <el-upload
            action="http://api.yccim.com/upload"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :on-remove="handleRemove">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-col>
        <el-col class="item" :span="6" v-for="i in 40" :key="i">
          <img
            src="https://yccim-1256669708.cos.ap-guangzhou.myqcloud.com/%E5%A4%B4%E5%83%8F.jpg"
            @click="chooseOne('choose on url' + i)"
          />
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
export default {
  name: 'files',
  setup (props, { emit }) {
    const dialogTableVisible = ref(false)
    const categorys = ref([
      { _id: '1', title: '分类1' },
      { _id: '2', title: '分类2' },
      { _id: '3', title: '分类3' },
      { _id: '4', title: '分类4' }
    ])
    const search = ref('')
    const category = ref('')
    const openDialog = () => (dialogTableVisible.value = true)
    const chooseOne = (url) => {
      emit('onChoose', url)
      dialogTableVisible.value = false
    }
    return {
      dialogTableVisible,
      openDialog,
      categorys,
      category,
      search,
      chooseOne
    }
  }
}
</script>

<style lang="stylus" scoped>
.dialog-content
  max-height 60vh
  overflow-y auto
.dialog-header
  margin-bottom 1rem
.item
  height 12rem
  padding 0.25rem
  img
    widht 100%
    height 100%
    border 1px solid #dcdcdc
    border-radius 5px
    cursor pointer
.upload
  padding-top 1rem
</style>
