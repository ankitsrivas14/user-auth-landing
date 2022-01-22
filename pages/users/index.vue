<template>
    <div class="inis-users__main-container">
        <Sidebar />
        <UserContainer
            :users="users"
        />
    </div>
</template>

<script>
import Sidebar  from '@/components/Sidebar.vue'
import UserContainer  from '@/components/UserContainer.vue'
export default {
    components: {
        Sidebar,
        UserContainer
    },
    async asyncData(context){
        // console.log(" context.store",  context.store)
        await context.store.dispatch('users/FETCH_ALL_USERS')
        return {
            users: context.store.getters['users/getAllUsers']
        }
    },
}
</script>

<style lang="scss" scoped>
.inis-users__main-container{
    display: flex;
    width: 100%;
}
</style>