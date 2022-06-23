<template>
    <div class="navbar">
        <div class="lang-selector-wrapper">
            <el-select v-model="selectedLanguageModel" placeholder="Select" class="lang-selector">
                <el-option
                    v-for="item in LayoutLanguages"
                    :key="item.param"
                    :label="item.title"
                    :value="item.param"
                />
            </el-select>
        </div>

        <div class="navbar__title">Info Web</div>
        
        <div class="navbar__actions">
            <el-button type="primary" disabled>Log In</el-button>
            <el-button type="info" disabled>Register</el-button>
        </div>
    </div>
</template>
<script lang="ts">
import {
    defineComponent, computed
} from 'vue'
import useStore from './../store/index'
import {
    storeToRefs 
} from 'pinia'
import {
    useI18n
} from 'vue-i18n'
import {
    LayoutLanguages, Locales
} from '../plugins/i18n/config/locales'

export default defineComponent({
    name: 'CustomNavbar',
    setup (){
        const { main } = useStore()
        const { selectedLanguage, elementPlusLanguage } = storeToRefs(main)
        const { locale } = useI18n()

        return {
            selectedLanguageModel: computed({
                get () {
                    return selectedLanguage.value
                },
                set (value: Locales){
                    locale.value = value
                    main.setLanguage(value)
                }
            }),
            LayoutLanguages,
            elementPlusLanguage
        }
    }
})
</script>

<style lang="scss">
@import "../styles/mobile";

.navbar {
    height: 100%;
    padding: 0.5rem 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    @include mobile {
        div {
            margin: 0.5rem 0;
        }

        .navbar__title {
            order: 1;
            width: 40%;
            text-align: center;
            word-break: break-all;
        }

        .lang-selector-wrapper {
            order: 2;
            width: 60%;
            display: flex;
            justify-content: flex-end;
        }

        .navbar__actions {
            order: 3;
            width: 100%;
            display: flex;
            justify-content: center;
        }
    }

    .lang-selector {
        max-width: 120px;

        @include mobile {
            max-width: unset;
            width: 140px;
        }
    }
}
</style>