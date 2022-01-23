<template>
    <div class="inis-sidebar__main-container">
        <div class="inis-sidebar__upper">
            <div class="inis-sidebar__logo">
                <img class="inis-sidebar__logo-image" :src="require('@/assets/images/header-logo.png')" alt="">
            </div>
            <MenuItems />
        </div>
        <div class="inis-sidebar__lower">
            <img src="" alt="">
            <span @click="handleSignout" class="inis-signout">Sign Out</span>
        </div>
    </div>
</template>

<script>
import MenuItems from '@/components/MenuItems.vue';
export default {
    components: {
        MenuItems,
    },
    methods: {
        handleSignout(){
            this.$router.push({
                path: "login"
            })
        }
    }
}
</script>

<style lang="scss" scoped>
.inis-sidebar__main-container{
    padding: 24px;
    background-color: #FBFBFB;
    height: 93vh;
    width: 250px;
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width: 920px) {
        width: 180px;
    }
    @media screen and (max-width: 850px) {
        flex-direction: row;
        width: 100%;
        height: 70px;
        align-items: center;
        z-index: 2;
        .inis-sidebar__upper{
            display: flex;
            width: 100%;
        }
        .inis-sidebar__lower{
            width: 150px;
            height: max-content;
        }
        .inis-sidebar__logo-image{
            margin-bottom: 0 !important;
        }
    }
    .inis-sidebar__logo-image{
        width: 100px;
        margin-bottom: 30px;
    }
    .inis-signout{
        cursor: pointer;
    }
}
</style>