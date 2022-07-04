<template>
    <el-row class="detect-Langs-wrapper">
        <el-input
            v-model="target"
            :disabled="isLoading"
            placeholder="Please input"
            class="hahaha"
            @keyup.enter="detectLang"
        >
            <template #suffix>
                <el-icon class="el-input__icon">
                    <component :is="Search" @click="detectLang"></component>
                </el-icon>
            </template>
        </el-input>


        <el-col
            v-for="item in 1"
            :key="item"
            :span="24"
            class="el-col-custom"
        >
            <el-card class="detect-Langs__card">
                <div class="typing-content">{{target}}</div>
                <div class="detect-Langs__card-content">
                    <div class="detect-Langs__lang" v-for="item in result" :key="item.language">
                        <el-icon class="el-input__icon">
                            <component :is="item.isReliable ? CircleCheckFilled : QuestionFilled"></component>
                        </el-icon>
                        <p>{{ $tc('detectLanguages.check-result', item.isReliable ? 1 : 0,{language: item.language})}}</p>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import {
    defineComponent, ref
} from 'vue'
import useStore from '../store/index'
import {
    storeToRefs 
} from 'pinia'
import {
    CircleCheckFilled, Search, QuestionFilled
} from '@element-plus/icons-vue'

export default defineComponent({
    name: 'detectLangsApp',
    setup (){
        const { detectLanguage } = useStore()
        let{ target, result } = storeToRefs(detectLanguage)
        const isLoading = ref(false)
        const detectLang = async ()=>{
            isLoading.value = true
            const res = await detectLanguage.detectLangs()
            if(Array.isArray(res?.target.detections)){
                result.value = res?.target.detections
            }
            isLoading.value = false
        }

        return {
            target, 
            result,
            Search,
            CircleCheckFilled,
            QuestionFilled,
            isLoading,
            detectLang
        }
    }
})
</script>

<style lang="scss">
.detect-Langs-wrapper {
    .el-col-custom {
        display: flex;
        justify-content: center;
        margin: 0.5rem 0;
    }

    .hahaha {
        max-width: 300px;
        margin: 0 auto;
    }

    .detect-Langs__card {
        width: 100%;
        max-width: 300px;

        .el-card__body {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .detect-Langs__card-content {
            width: 100%;
            padding: 0.5rem;
        }

        .detect-Langs__lang {
            display: flex;
            align-items: center;

            .el-input__icon {
                margin-right: 0.5rem;
            }
        }
    }
}

</style>