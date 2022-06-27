import {
    useDemoStore 
} from './modules/demo'
import {
    useMainStore 
} from './modules/main'
import {
    useDetectLanguageStore 
} from './modules/detactLanguages'

const useStore = () => ({
    demo: useDemoStore(),
    main: useMainStore(),
    detectLanguage: useDetectLanguageStore()
})

export default useStore
