import request from '@renderer/utils/request';
export async function ApiTableGetPage(PageIndex:number,PageSize:number) : Promise<any> {
	return request({
		url: '/table/Add',
		method: 'POST',
		data:{
			PageIndex,PageSize
		}
	});
}
export async function ApiTableInsert(data:any) : Promise<any> {
	return request({
		url: '/table/Add',
		method: 'POST',
		data
	});
}
export async function ApiTableUpdate(data:any) : Promise<any> {
	return request({
		url: '/table/Add',
		method: 'POST',
		data
	});
}
export async function ApiTableDelete(id:any) : Promise<any> {
	return request({
		url: '/table/Add',
		method: 'POST',
		data:{id}
	});
}
export async function ApiTableCount() : Promise<any> {
	return request({
		url: '/table/Add',
		method: 'POST'
		
	});
}
