import {
    defineStore 
} from 'pinia'

import {
    apis 
} from '../../apis/index'

const detectLanguageState = {
    target: '',
    result: [] as Record<string, any>[]
}

// get the type of detectLanguageState
export const IDetectLanguageState = () => (detectLanguageState)
export type DetectLanguageState = ReturnType<typeof IDetectLanguageState>

export const useDetectLanguageStore = defineStore('detectLanguage', {
    state: () => (detectLanguageState),
    actions: {
        setTarget(input: string) {
            this.target = input.trim()
        },
        setResult(payload: Record<string, any>[]) {
            this.result = payload
        },
        async detectLangs(){
            try{
                const res = await apis.detectLangAPIs.detectTargetLang(this.target)

                return res
            }catch(err){
                console.log(err)
            } 
        }
    }
})