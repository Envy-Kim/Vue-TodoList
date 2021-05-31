import axios from 'axios'
import store from '@/store'

const BASE_URL = 'https://api.stickinteractive.com'

const DEFAULT_HEADERS = {
    'Content-Type': 'application/json',
    'Access-Controll-Allow-Origin': '*'
}

function setSpinner(visible) {
    if (visible) {
        store.dispatch('Todo/setLoadingState', visible)
            .then(
                console.log('spinner start success')
            )
            .catch(
                console.log('spinner start fail')
            )
    } else {
        setTimeout(() => {
            store.dispatch('Todo/setLoadingState', visible)
                .then(
                    console.log('spinner end success')
                )
                .catch(
                    console.log('spinner end fail')
                )
        }, 300)
    }
}

function responseInterceptors(axiosInst) {
    axiosInst.interceptors.request.use(
        function (request) {
            setSpinner(true)
            return request
        }
    )

    axiosInst.interceptors.response.use(
        function (response) {
            setSpinner(false)
            return response.data
        },
        function (error) {
            setSpinner(false)

            if (error.response.status === 403) {
                return Promise.reject({
                    code: 403,
                    message: "인증 기간이 만료 되었습니다.",
                    // 인증 정보 불일치
                })
            } else if (error.response.status === 401) {
                return Promise.reject({
                    code: 401,
                    message: "인증 정보가 없습니다.",
                })
            }
        }
    )
    return axiosInst
}

// 인증이 필요 없는 기본 통신 axios instance
export function axiosDefault() {
    return responseInterceptors(
        axios.create({
            baseURL: BASE_URL,
            headers: DEFAULT_HEADERS,
            timeout: 3000,
        })
    )
}
