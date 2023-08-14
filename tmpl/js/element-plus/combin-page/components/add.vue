<template>
	<el-dialog :close-on-click-modal="false" :close-on-press-escape="false" title="添加" :model-value="visible"
		@close="onCancel">
		<template #footer>
			<el-button key="back" @click="() => onCancel()">取消</el-button>
			<el-button key="submit" type="primary" @click="submitForm()">添加
			</el-button>
		</template>
		<el-form :model="modelRef" :rules="rulesRef" ref="formRef" label-width="150px">

		</el-form>
	</el-dialog>

</template>

<script setup lang="ts">
	import { TableData, initValue } from '../data.d'
	import { ApiAdd } from '../service'
	import { preventScript, preventSpecialCharacters } from '@renderer/utils/InputCheck'
	import {
		reactive,
		ref,
		defineProps,
		watch,
		computed
	} from 'vue'
	import type {
		FormInstance,
		FormRules,

	} from 'element-plus'
	import {
		ElMessageBox, ElForm, ElMessage
	} from 'element-plus';
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
		},
		Data: {
			type: Object,
			required: true
		},

	})
	// 表单值
	const modelRef = ref<TableData>(initValue);
	// 表单验证
	const rulesRef = reactive({
		Title: [
			{ required: true, message: '分类名称', trigger: 'blur' },
			{ validator: preventSpecialCharacters, trigger: 'change' }
		],

	})

	watch(() => props.visible, (newValue) => {
		if (newValue) {
			if (props.data) {
				modelRef.value = props.data
			}
		}
	})
	// form
	const formRef = ref<typeof ElForm>();
	// 注册loading
	const submitLoading = ref<boolean>(false);
	/**
		* 提交
		*/
	const submitForm = async () => {
		submitLoading.value = true;
		try {
			const valid : boolean = formRef.value ? await formRef.value.validate() : false;
			if (valid === true) {
				let params = modelRef.value;
				if (props.data) {
					ApiAdd(params).then(res => {
						props.onSubmit(params)

					})
				} else {
					ApiEdit(params).then(res => {
						props.onSubmit(params)
					})
				}

			}
		} catch (error) {
			console.log('error', error);
			ElMessage.warning(error);
		}
		submitLoading.value = false;
	}
</script>

<style scoped>
</style>