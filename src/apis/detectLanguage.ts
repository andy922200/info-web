import {
    createAxiosService
} from '../plugins/axios/axios'
const token = `${import.meta.env.VITE_DetectLangToken}`
const detectLangRequest = createAxiosService({
    baseURL: 'https://ws.detectlanguage.com',
    token 
})

export const detectLangAPIs = {
    detectTargetLang: (data: string) => {
        return detectLangRequest.post('/0.2/detect', data)
    }
}