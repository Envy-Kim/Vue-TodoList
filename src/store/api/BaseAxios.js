import axios from 'axios';
// import { Token } from 'utils.ts'

const DEFAULT_HEADERS = {
	'Content-Type': 'application/json',
	'Access-Controll-Allow-Origin': '*'
}

// const AUTH_HEADERS = {
// 	'Content-Type': 'application/json',
// 	'Access-Controll-Allow-Origin': '*',
// 	'Authorization': Token.getToken()
// }

// const FORM_HEADERS = {
// 	'Content-Type': 'multipart/form-data',
// 	'Accept': 'application/json',
// 	'Access-Controll-Allow-Origin': '*',
// 	'Authorization': Token.getToken()
// }

const BASE_URL = 'http://api.stickinteractive.com'

// function responseInterceptors(axiosInst: AxiosInstance) {
// 	axiosInst.interceptors.response.use(
// 		function (response) {
// 			// 다른 정보를 무시하고 data 본문만을 리턴
// 			return response.data;
// 		},
// 		function (error) {
// 			// 인증 만료
// 			if (error.response.status === 403) {
// 				return Promise.reject({
// 					code: 403,
// 					message: '인증 기간이 만료 되었습니다.'
// 			// 인증 정보 불일치
// 			} else if (error.response.status === 401) {
// 				return Promise.reject({
// 					code: 401,
// 					message: '인증 정보가 없습니다.'
// 				});
// 			}
// 		}
// 	)

// 	return axiosInst;
// }

const instance = axios.create({
	baseURL: BASE_URL,
	headers: DEFAULT_HEADERS,
	timeout: 3000,
});

export default instance;