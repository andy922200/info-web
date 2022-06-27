import {
    defineStore 
} from 'pinia'

const detectLanguageState = {
    target: '',
    result: ''
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
        setResult(payload: string) {
            this.result = payload
        }
    }
})