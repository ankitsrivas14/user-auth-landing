<template>
    <div class="inis-login__main-container">
        <div class="inis-login__inner-container">
            <div class="inis-login__title">SIGN IN TO YOUR ACCOUNT</div>
            <input 
                v-model="username"
                class="inis-login__input" 
                placeholder="Enter username" 
                type="text" 
            />
            <input 
                v-model="password"
                class="inis-login__input" 
                placeholder="Enter password" 
                type="password" 
            />
            <button @click="handleLogin" class="inis-login__button">SIGN IN</button>
            <div v-if="isInvalidCred" class="inis-invalid">Invalid Credentials</div>
        </div>

    </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const {
  mapGetters: mapAuthGetters,
  mapActions: mapAuthActions
} = createNamespacedHelpers("auth");
export default {
    data(){
        return {
            username: '',
            password: '',
            isInvalidCred: false
        }
    },
    computed: {
        ...mapAuthGetters(["isAuth"]),
    },
    methods: {
        ...mapAuthActions({
            BEGIN_AUTH: "BEGIN_AUTH"
        }),
        async handleLogin(){
            const payload = {
                username: this.username,
                password: this.password
            }
            const res = await this.BEGIN_AUTH(payload);
            if(!res){
                this.showError();
                return;
            }
            if(this.isAuth){
                this.$router.push({
                    name: "users"
                })
            }
        },
        showError(){
            this.isInvalidCred = true;
            setTimeout(() => {
                this.isInvalidCred = false;
            }, 3000)
        },
    },
    mounted(){
    },
}
</script>

<style lang="scss" scoped>
.inis-login__main-container{
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .inis-login__inner-container{
        width: 100%;
        display: flex;
        flex-direction: column;
        width: 350px;
        margin: 0 auto;
        .inis-login__title{
            font-weight: 500;
            margin-bottom: 35px;
            text-align: center;
        }
        .inis-login__input{
            border: none;
            outline: none;
            color: #000;
            background-color: #e2e2e2;
            height: 40px;
            margin-bottom: 20px;
            padding: 4px 8px;
        }
        .inis-login__button{
            cursor: pointer;
            height: 40px;
            background-color: #736ADE;
            color: #fff;
            border: none;
            outline: none;
            margin-top: 20px;
        }
        .inis-invalid{
            padding: 8px;
            background-color: #e68e8e;
            margin-top: 10px;
            border: 1px solid #cf5f5f;
            text-align: center;
        }
    }
}
</style>