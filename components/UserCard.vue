<template>
    <div 
        @mouseenter="showDetails = true" 
        @mouseleave="showDetails = false" 
        @click="handleCardClick"
        class="inis-user__main-container"
    >
        <img :src="user.image" alt="">
        <template v-if="showDetails">
            <div class="inis-user__details-overlay"></div>
            <div class="inis-user__details-container">
                <div class="inis-user__header">
                    Email Icon
                </div>
                <div class="inis-user__body">
                    <div class="inis-user__name">{{ user.name }}</div>
                    <div class="inis-user__address">{{ user.address.city }}</div>
                </div>
            </div>
        </template>
        
    </div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object,
            required: true,
            default: () => {}
        }
    },
    data(){
        return {
            showDetails: false,
        }
    },
    methods: {
        handleCardClick(){
            this.$emit('show-info-modal');
        }
    }
}
</script>

<style lang="scss" scoped>
.inis-user__main-container{
    width: 250px;
    height: 380px;
    border-radius: 8px;
    position: relative;
    cursor: pointer;
    @media screen and (max-width: 920px) {
        width: 230px;
        height: 350px;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: 8px;
    }
    .inis-user__details-overlay{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.5;
        border-radius: 8px;
        width: 100%;
        height: 100%;
        color: #fff;
    }
    .inis-user__details-container{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        color: #fff;
        .inis-user__header{
            padding: 20px;
            display: flex;
            flex-direction: row-reverse;
        }
        .inis-user__body{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            height: calc(100% - 65px);
            .inis-user__name{
                font-weight: 600;
                font-size: 22px;
                text-align: center;
            }
            .inis-user__address{
                font-size: 16px;
            }
        }
    }
}
</style>