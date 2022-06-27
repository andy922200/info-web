import {
    createAxiosService, ICustomAxiosResponse
} from '../plugins/axios/axios'
const token = `${import.meta.env.VITE_DetectLangToken}`
const detectLangRequest = createAxiosService({
    baseURL: '',
    token 
})

export const detectLangAPIs = {
    detectTargetLang: (data: string): Promise<ICustomAxiosResponse> => {
        return detectLangRequest.post('detectLang/0.2/detect', null, {
            params: {
                q: data
            }
        })
    }
}