<template>
  <el-dialog
    :close-on-click-modal="false"
    :close-on-press-escape="false"
    title="弹窗"
    :model-value="visible"
    @close="onCancel"
  >
    <template #footer>
      <el-button key="back" @click="() => onCancel()">取消</el-button>
    </template>
  </el-dialog>
  <!-- 	调用代码示例
	<AddWindow :visible="isShowAddWindow" :onCancel="()=>isShowAddWindow=false" :onSubmit="AddWindowSubmit"
		:Parent="addData">
	</AddWindow>
-->
  <!--
  const isShowAddWindow = ref(false) 
  const AddDialog = () => { isShowAddWindow.value = true } 
  const  AddWindowSubmit = () => { isShowAddWindow.value = false } 
  -->
</template>

<script setup lang="ts">
import { defineProps, watch } from 'vue'
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
watch(
  () => props.visible,
  (newValue) => {
    if (newValue) {
      console.log(newValue)
    }
  }
)
</script>

<style scoped></style>
