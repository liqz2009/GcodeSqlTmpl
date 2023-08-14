<template>
	<div class="indexlayout-main-conent">
		<el-row>
			<el-col :span="4">新闻栏目</el-col>
			<el-col :span="4" :offset="12">
				<el-button @click="AddTableData()" type="primary">新建栏目</el-button>
			</el-col>
		</el-row>
		<el-row>
			<el-table :data="TableDataList" style="width: 100%; margin-bottom: 20px" row-key="id" border>
				<el-table-column prop="Title" label="标题" sortable />
				<el-table-column label="操作">
					<template #default="{row}">
						<el-button type="success" icon="Plus" circle size="small" @click="AddMenu(row.Id)" />
						<el-button type="primary" icon="Edit" circle size="small" @click="EditTableData(row)" />
						<el-button type="danger" icon="Delete" circle size="small" @click="DeleteTableData(row.Id)" />

					</template>
				</el-table-column>
			</el-table>
		</el-row>
		<el-row>
			<el-pagination v-model:current-page="PageIndex" v-model:page-size="PageSize" :page-sizes="[10, 15, 20, 30]"
				background="true" layout="total, prev, pager, next" :total="Number(total)"
				@size-change="handleSizeChange" @current-change="handleCurrentChange" />
		</el-row>
		<AddWindow :visible="isShowAddWindow" :onCancel="()=>isShowAddWindow=false" :onSubmit="AddWindowSubmit"
			:Parent="addData">
		</AddWindow>

	</div>
</template>

<script setup lang="ts">
	import { ApiGetPage, ApiDelete } from './service'
	import { TableData } from './data.d'
	import { ref, computed, onMounted } from 'vue'
	import { ElMessageBox } from "element-plus";
	import AddWindow from './components/Add.vue'

	const TableDataList = ref<Array<TableData>>([])

	const PageSize = ref(10);
	const PageIndex = ref(1);
	const total = ref(0);

	const getList = async () => {
		let res = await ApiGetPage(PageIndex, PageSize)
		TableDataList.value = res
	}


	const addData = ref();
	const isShowAddWindow = ref(false)

	const AddTableData = () => {
		addData.value = ""
		isShowAddWindow.value = true
	}
	const AddWindowSubmit = () => {
		isShowAddWindow.value = false
		getList()
	}
	const EditTableData = (row : any) => {
		addData.value = row
		isShowAddWindow.value = true
	}

	const DeleteTableData = (id) => {
		ElMessageBox.confirm('确定删除吗？', '删除', {
			confirmButtonText: '确认',
			cancelButtonText: '取消',
			type: 'warning',
		}).then(async () => {
			ApiDelete(id).then(res => {
				getList()
			})
		})
	}
	const handleCurrentChange = (val : number) => {
		PageIndex.value = val
		getList()
	}
	const handleSizeChange = (val : number) => {
		PageSize.value = val
	}

	onMounted(() => {
		getList()
	})
</script>

<style scoped>

</style>