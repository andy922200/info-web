import {
    useDemoStore 
} from './modules/demo'
import {
    useMainStore 
} from './modules/main'
import {
    useDetectLanguageStore 
} from './modules/detectLanguages'

const useStore = () => ({
    demo: useDemoStore(),
    main: useMainStore(),
    detectLanguage: useDetectLanguageStore()
})

export default useStore
