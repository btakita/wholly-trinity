export interface api__cmd_T {
	contact__set:contact__set__cmd_T
}
export interface contact__set__cmd_T {
	email?:string
	phone?:string
}
export interface payload_T {
	contact__set?:{
		status:status_T
		code:OK|INTERNAL_ERROR|MISSING_EMAIL_PHONE
		message:string
	},
	ping?:{
		status:status_T
		code:OK
		message:string
	}
}
export type status_T = 200|400|500
export type OK = 'OK'
export type INTERNAL_ERROR = 'ERROR'
export type MISSING_EMAIL_PHONE = 'MISSING_EMAIL_PHONE'
