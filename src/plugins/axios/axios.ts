import axios, {
    AxiosRequestConfig, AxiosResponse 
} from 'axios'

// create an axios instance
export const createAxiosService = ({baseURL= '', token}:{baseURL: string, token: string }) => {
    const instance = axios.create({
        baseURL: baseURL || `${import.meta.env.VITE_APP_BASE_DOMAIN}${import.meta.env.VITE_APP_BASE_API}`,
        timeout: 10000,
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${token}`
        }
    })

    // request interceptor
    instance.interceptors.request.use(
        (config: AxiosRequestConfig) => {
            if (!config.headers) {
                throw new Error(
                    'Expected \'config\' and \'config.headers\' not to be undefined'
                )
            }
            return config
        },
        error => {
            console.log(error) // for debug
            return Promise.reject(error)
        }
    )

    // response interceptor
    instance.interceptors.response.use(
        (response: AxiosResponse) => {
            const finalResponse = {
                ...response,
                target: response?.data?.data || {
                }
            }

            return finalResponse
        },
        error => {
            console.log('err' + error) // for debug
            return Promise.reject({
                ...error.response
            })
        }
    )

    return instance
}
