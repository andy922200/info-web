<template>
    <el-row class="food-info-wrapper">
        <el-col
            v-for="item in 1"
            :key="item"
            :span="24"
            class="el-col-custom"
        >
            <el-card class="food-info__card">
                <img
                    src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                    class="image"
                />
                <div class="food-info__card-content">
                    <span>Yummy hamburger</span>
                    <div class="bottom">
                        <time class="time">Time Will be here.</time>
                    </div>
                </div>
            </el-card>
        </el-col>
    </el-row>
</template>

<script lang="ts">
import {
    defineComponent
} from 'vue'
import useStore from './../store/index'
import {
    storeToRefs 
} from 'pinia'

export default defineComponent({
    name: 'FoodInfo',
    setup (){
        const { main } = useStore()
        const { selectedLanguage } = storeToRefs(main)

        return {
            selectedLanguage
        }
    }
})
</script>

<style lang="scss">
.food-info-wrapper {
    .el-col-custom {
        display: flex;
        justify-content: center;
        margin: 0.5rem 0;
    }

    .food-info__card {
        width: 100%;
        max-width: 300px;

        .el-card__body {
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
        }

        .food-info__card-content {
            width: 100%;
            padding: 0.5rem;
        }
    }
}
</style>