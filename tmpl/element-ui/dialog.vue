<template>
	<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" width="500px" title="弹窗"
		:model-value="visible" @close="onCancel">

		<template #footer>
			<el-button key="back" @click="() => onCancel()">取消</el-button>
			<el-button key="submit" type="primary" @click="submitForm(ruleFormRef)">提交
			</el-button>
		</template>


		<el-form ref="ruleFormRef" :model="ruleForm" label-width="120px" :rules="rules">
			<el-form-item label="工程名称" prop="name">
				<el-input v-model="ruleForm.name" placeholder="请输入工程名称" />
			</el-form-item>
			<el-form-item label="存储路径" prop="path">
				<el-input v-model="ruleForm.path" placeholder="请输入工程存储路径">
					<template #append>
						<el-button icon="FolderOpened" @click="openfile" />
					</template>
				</el-input>
			</el-form-item>
		</el-form>


	</el-dialog>

</template>

<script setup lang="ts">
	import {
		reactive,
		ref,
		defineProps,
		onMounted,
		inject
	} from 'vue'
	import type {
		FormInstance,
		FormRules,

	} from 'element-plus'
	import {
		ElMessageBox
	} from 'element-plus';

	import {
		useProjectStore
	} from "@renderer/store/projectStore"

	const global:any=inject('global')
	const props = defineProps({
		visible: {
			type: Boolean,
			required: true
		},
		onCancel: {
			type: Function,
			required: true
		},
		onSubmit: {
			type: Function,
			required: true
		}
	})

	const projectStore = useProjectStore()
	const ruleFormRef = ref < FormInstance > ()
	const ruleForm = reactive({
		name: '',
		path: ''
	})
	const rules = reactive < FormRules > ({
		name: [{
				required: true,
				message: '请输入名称',
				trigger: 'blur'
			},
			{
				min: 3,
				max: 50,
				message: '长度应该3到50',
				trigger: 'blur'
			},
		],
		
	})
	/**
	 * 提交
	 */
	const submitForm = async (formEl: FormInstance | undefined) => {
		if (!formEl) return
		await formEl.validate(async (valid, fields) => {
			if (valid) {
				console.log('验证成功')
			} else {
				console.log('error submit!', fields)
			}
		})
	}
	const saveProject = (path: string) => {
		let data: any = {
			name: ruleForm.name,
			path: path,
			items: []
		};
	


	}
	const openfile = async () => {
		ruleForm.path = await global.EAPI.DirectoryOpen(ruleForm.path)
	}
</script>

<style scoped>
</style>
