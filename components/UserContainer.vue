<template>
    <div class="inis-users__outer-container">
        <div class="inis-users__side-wrapper"></div>
        <div class="inis-users__main-inner-container">
            <div class="inis-users__header">
                <span>USERS</span>
            </div>
            <div class="inis-users__container">
                <UserCard
                    v-for="user in users" 
                    :key="user.id" 
                    :user="user"
                    @show-info-modal="showInfoModal(user)"
                />
            </div>
            <UserModal 
                v-if="showModal"
                :user="selectedUser"
                @close-modal="handleCloseModal"
            />
        </div>
    </div>
</template>

<script>
import UserCard from '@/components/UserCard.vue';
import UserModal from '@/components/UserModal.vue';
export default {
    props: {
        users: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    components: {
        UserCard,
        UserModal,
    },
    data(){
        return {
            showModal: false,
            selectedUser: {}, 
        }
    },
    methods: {
        showInfoModal(val){
            this.selectedUser = {...val};
            this.showModal = true;
        },
        handleCloseModal(){
            this.selectedUser = {};
            this.showModal = false;
        }
    }
}
</script>

<style lang="scss" scoped>
.inis-users__outer-container{
    display: flex;
    .inis-users__side-wrapper{
        width: 300px;
        height: 100%;
        @media screen and (max-width: 920px) {
            width: 230px;
        }
        @media screen and (max-width: 850px) {
            display: none;
        }
    }
    .inis-users__main-inner-container{
        display: flex;
        flex-direction: column;
        width: calc(100% - 327px);
        padding: 40px;
        position: relative;
        @media screen and (max-width: 920px) {
            width: calc(100% - 310px);
        }
        @media screen and (max-width: 850px) {
            width: 100%;
        }
        .inis-users__header{
            width: 100%;
            height: max-content;
            display: flex;
            flex-direction: row-reverse;
            margin-bottom: 32px;
            span{
                color: #000;
                font-size: 32px;
                font-weight: 600;
                border-bottom: 6px solid;
            }
        }
        .inis-users__container{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            gap: 32px;
        }
    }
}
</style>