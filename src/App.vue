<template>
    <el-config-provider :locale="elementPlusLanguage">
        <el-container>
            <el-header>
                <Navbar />
            </el-header>
            <el-main>
                <!-- render route here -->
                <router-view></router-view>
            </el-main>
        </el-container>
    </el-config-provider>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import useStore from './store/index'
import {
    storeToRefs 
} from 'pinia'
import {
    ElConfigProvider 
} from 'element-plus'
import Navbar from './components/Navbar.vue'

export default defineComponent({
    name: 'App',
    components: {
        ElConfigProvider,
        Navbar
    },
    setup (){
        const { main } = useStore()
        const { elementPlusLanguage } = storeToRefs(main)

        return {
            elementPlusLanguage
        }
    }
})
</script>

<style lang="scss" src="./styles/App.scss"></style>
