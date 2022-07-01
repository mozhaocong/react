import { isObject } from 'lodash'
import { isTrue } from '@/htwig/utils'
import { arrayGetData } from '@/htwig/utils/data'
import { m_diy_link_type } from '@/utils/util_data'

export const modalList = ['goods', 'category', 'topic', 'seckill', 'voucher', 'draw']
export const noInput = [
	'spell_group',
	'ladder_group',
	'brand_home',
	'presale',
	'voucher_center',
	'point',
	'svideo_center',
	'live_center',
	'sign_center',
	'spreader_center',
	'rank',
]
export const inputEnter = ['url', 'keyword']

// 组件校验
export const decorationOperationValidator = (rule, value, callback) => {
	if (!isTrue(value)) {
		callback()
		return
	}
	const { linkType, linkValue } = value
	if (!isTrue(linkType) || noInput.includes(linkType)) {
		callback()
		return
	}
	if (isTrue(linkValue)) {
		callback()
	} else {
		callback('参数不能为空')
	}
}

export const linkMapData = (item = {}) => {
	let { val = {}, client = '' } = item
	if (!isObject(val)) {
		try {
			val = JSON.parse(val)
		} catch (err) {
			val = {}
		}
	}

	if (item.type === 'goods') {
		return val.goodsName
	} else if (item.type === 'category') {
		return val.categoryName
	} else if (item.type === 'topic') {
		if (client && client === 'mobile') {
			return val.name
		} else {
			return val.decoName
		}
	} else if (item.type === 'seckill') {
		return val.seckillName
	}
}

export const getLinkName = (item = {}) => {
	const { linkType, linkValue } = item
	const data = arrayGetData(m_diy_link_type(), { key: linkType })
	if (!isTrue(data) || !linkType) return '无操作'
	if (noInput.includes(linkType)) {
		return data[0].name
	} else if (inputEnter.includes(linkType)) {
		return data[0].name + ':' + linkValue
	} else if (modalList.includes(linkType)) {
		return data[0].name + '名称:' + linkValue
	} else {
		return '数据异常'
	}
}

export function getDecorationOperationData(value, key = 'decorationOperation') {
	if (isTrue(value) && isTrue(value[key])) {
		const data = value[key]
		return {
			type: data.linkType,
			url: data.linkValue,
			info: isTrue(data.linkInfo) && isObject(data.linkInfo) ? JSON.stringify(data.linkInfo) : data.linkInfo,
		}
	} else {
		return {}
	}
}
export function setDecorationOperationData(value, key = 'decorationOperation') {
	if (!isTrue(value)) return {}
	const data = {}
	if (isTrue(value.type)) data.linkType = value.type
	if (isTrue(value.url)) data.linkValue = value.url
	if (isTrue(value.info)) {
		try {
			data.linkInfo = JSON.parse(value.info)
		} catch (e) {
			data.linkInfo = value.info
		}
	}
	return data
}
