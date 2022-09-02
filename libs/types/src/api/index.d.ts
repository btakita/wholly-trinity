import type { sheets_v4 } from 'googleapis'
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
		code:OK|APPEND_ERROR|INTERNAL_ERROR|MISSING_EMAIL_PHONE
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
export type APPEND_ERROR = 'APPEND_ERROR'
export type INTERNAL_ERROR = 'INTERNAL_ERROR'
export type MISSING_EMAIL_PHONE = 'MISSING_EMAIL_PHONE'
export interface google__credentials_T {
	type:string
	project_id:string
	private_key_id:string
	private_key:string
	client_email:string
	client_id:string
	auth_uri:string
	token_uri:string
	auth_provider_x509_cert_url:string
	client_x509_cert_url:string
}
export interface googlesheets__root__payload_T {
	spreadsheetId:string
	properties:{
		title:string
		locale:string
		autoRecalc:string,
		timeZone:string,
		defaultFormat:sheets_v4.Schema$CellFormat,
		spreadsheetTheme:sheets_v4.Schema$SpreadsheetTheme
	},
	sheets:sheets_v4.Schema$Sheet[],
	spreadsheetUrl:string
}
export type append__payload_T = sheets_v4.Schema$AppendValuesResponse|google__error__payload_T
export interface google__error__payload_T {
	error:{
		code:number
		message:string
		status:string
		details:{
			'@type':string
			reason:string
			domain:string
			metadata:{
				method:string
				service:string
			}
		}[]
	}
}
