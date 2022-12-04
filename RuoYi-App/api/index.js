import request from '@/utils/request'

// 获取首页banner数据
export function getIndexBanner() {
	return request({
		'url': '/home',
		'method': 'get'
	})
}
// 首页触底加载数据
export function getIndexBottom(pageIndex) {
	const data = {
	  pageIndex
	}
	return request({
		'url': '/floorlist',
		'method': 'get',
		'data': data
	})
}
// 首页头部列表切换的数据
export function getHeaderClassify(categoryId) {
	const data = {
	  categoryId
	}
	return request({
		'url': '/classify',
		'method': 'get',
		'data': data
	})
}