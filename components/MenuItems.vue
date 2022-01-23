<template>
    <div class="inis-menu__main-container">
        <div v-for="item in menu" :key="item.id" class="inis-menu__item">
            {{item.label}}
        </div>
    </div>
</template>

<script>
import {menuList} from '@/helper/constants.js'
export default {
    data(){
        return {
            menu: menuList, 
        }
    }
}
</script>

<style lang="scss" scoped>
.inis-menu__main-container{
    display: flex;
    flex-direction: column;
    .inis-menu__item{
        border-top: 2px solid;
        border-bottom: 2px solid;
        margin-bottom: 24px;
        padding: 12px;
        display: flex;
        justify-content: center;
        cursor: pointer;
    }
    @media screen and (max-width: 850px) {
        margin-left: 40px;
        flex-direction: row;
        margin-top: 12px;
        .inis-menu__item{
            border: none;
            margin-bottom: 0 !important;
        }
    }
}
</style>