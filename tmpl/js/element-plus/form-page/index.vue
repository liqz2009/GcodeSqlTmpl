<template>
  <div class="indexlayout-main-conent">
    <el-row>
      <el-col :span="4">站群管理</el-col>
      <el-col :span="6">
        <el-button @click="AddSite">添加站点</el-button>
      </el-col>
    </el-row>

    <el-table
      :data="list"
      style="width: 100%; margin-bottom: 20px"
      row-key="id"
      border
      default-expand-all
    >
      <el-table-column prop="Id" label="id" sortable />
      <el-table-column prop="SiteName" label="名称" sortable />
      <el-table-column prop="Addtime" label="时间" />
      <el-table-column prop="Expired" label="到期时间" />
      <el-table-column label="操作" prop="action" width="160">
        <template #default="{ row }">
          <el-button type="text" @click="() => detailUpdateData(row)">修改</el-button>
          <el-button type="text" @click="() => deleteTableData(row.Id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-row>
      <el-pagination
        layout="prev, pager, next"
        :total="total"
        @current-change="handleCurrentChange"
      />
    </el-row>
    <!-- 	<AddWindow :visible="isShowAddWindow" :onCancel="()=>isShowAddWindow" :onSubmit="AddWindowSubmit">
		</AddWindow> -->
  </div>
</template>
<script setup lang="ts">
import { ApiLiveServerGetPage, ApiLiveServerDelete } from './service'
import { TableListItem } from './data.d'
import { useUserStore } from '@renderer/store/user'
import SiteServer from '@renderer/components/SiteServer/index.vue'
import { ref, computed, onMounted } from 'vue'
import { ElMessageBox } from 'element-plus'
import AddWindow from './components/AddWindow.vue'
import EditWindow from './components/EditWindow.vue'

const list = ref<Array<TableListItem>>([])

const pageSize = ref(10)
const pageIndex = ref(1)
const user = useUserStore()
const selectSite = ref(user.$state.user.site)
const total = ref(0)
const route = ref()
const getList = async () => {
  const res = await ApiLiveServerGetPage(selectSite.value, pageIndex.value, pageSize.value)
  const { Count, Data } = res
  total.value = Count
  list.value = Data
}
const changeSite = (site: any) => {
  selectSite.value = site
  getList()
}
const addData = ref()
const isShowAddWindow = ref(false)
const AddSite = () => {
  isShowAddWindow.value = true
}
const AddWindowSubmit = () => {
  isShowAddWindow.value = false
  getList()
}

const editData = ref()
const isShowEditWindow = ref(false)
const detailUpdateData = (row) => {
  editData.value = row
  isShowEditWindow.value = true
}
const EditWindowSubmit = (data) => {
  isShowEditWindow.value = false
  getList()
}
const deleteTableData = (id) => {
  ElMessageBox.confirm('确定删除吗？', '删除', {
    confirmButtonText: '确认',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(async () => {
    ApiLiveServerDelete(id).then((res) => {
      getList()
    })
  })
}

const handleCurrentChange = (val: number) => {
  pageIndex.value = val
  getList()
}
const handleSizeChange = (val: number) => {
  pageSize.value = val
}
onMounted(() => {
  getList()
})
</script>
