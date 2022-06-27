import {
    createAxiosService, ICustomAxiosResponse
} from '../plugins/axios/axios'
const token = `${import.meta.env.VITE_DetectLangToken}`
const baseURL = `${import.meta.env.VITE_BaseURL}`
const detectLangRequest = createAxiosService({
    baseURL: baseURL || '',
    token 
})

export const detectLangAPIs = {
    detectTargetLang: (data: string): Promise<ICustomAxiosResponse> => {
        return detectLangRequest.post(`${baseURL ? '' : 'detectLang'}/0.2/detect`, null, {
            params: {
                q: data
            }
        })
    }
}