import { label_str_ } from '../label_str_/index.js'
export function email_error_a_(/** @type {string} */val, label = '') {
	if (typeof val !== 'number' && !val) return []
	const regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	return (val && regex.test(val)) ? [] : [`${label_str_(label)}must be a valid email address`]
}
