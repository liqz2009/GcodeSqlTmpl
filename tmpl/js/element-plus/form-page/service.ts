import request from '@renderer/utils/request';

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
