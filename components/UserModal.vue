<template>
    <div class="inis-modal__main-container" @click="handleClose">
        <div class="inis-modal__inner-container">
            <div class="inis-modal__modal-inner" @click.stop="">
                <img :src="user.image" alt="">
                <div class="inis-modal__info-container">
                    <div @click="handleClose" class="header-close">Close</div>
                    <div class="items-container">
                        <div class="list-items">{{user.name}}</div>
                        <div @click="handleEmailClick" class="list-items cursor-pointer">{{user.email}}</div>
                        <div class="list-items">{{user.phone}}</div>
                        <div class="list-items">{{user.address.street}}</div>
                        <div class="list-items">{{user.address.city}}</div>
                        <div class="list-items">{{user.website}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="inis-modal__overlay">
        </div>
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
    methods: {
        handleClose(){
            this.$emit('close-modal');
        },
        handleEmailClick(){
            const subject = 'We are hiring!';
            const body = `Hello, ${this.user.name}. We’d like to propose you an offer.`;

            window.location.href = `mailto:${this.user.email}?subject=${subject}&body=${body}` ;
        }
    }
}
</script>

<style lang="scss" scoped>
.inis-modal__main-container{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    .inis-modal__overlay{
        position: absolute;
        top: 0;
        left: 0;
        background-color: #000;
        opacity: 0.5;
        width: 100%;
        height: 100%;
        z-index: 1;
    }
    .inis-modal__inner-container{
        width: 50%;
        height: 366px;
        background-color: #fff;
        z-index: 2;
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-30%, -50%);
        min-width: 580px;
        @media screen and (max-width: 1020px) {
            transform: translate(-30%, -30%);
        }
        @media screen and (max-width: 850px) {
            transform: translate(-50%, -30%);
        }
        @media screen and (max-width: 650px) {
            min-width: initial;
            width: 80%;
            height: 282px;
            .items-container{
                padding: 0 !important;
                padding-top: 30px !important;
                .list-items{
                    font-size: 18px !important;
                }
            }
            .inis-modal__modal-inner{
                img{
                    width: 250px !important;
                    height: 282px !important;
                }
            }
        }
        @media screen and (max-width: 550px) {
            width: 90%;
            height: 70%;
            transform: translate(-50%, -40%);
            .inis-modal__modal-inner{
                flex-direction: column;
                img{
                    width: 280px !important;
                    height: 330px !important;
                    margin: 15px auto 0;
                }
                .header-close{
                    display: none !important;
                }
                .items-container{
                    padding-top: 0 !important;
                    text-align: center;
                }
            }
        }
        .inis-modal__modal-inner{
            width: 100%;
            display: flex;
            img{
                width: 350px;
                height: 366px;
            }
            .inis-modal__info-container{
                padding: 20px;
                width: 100%;
                .header-close{
                    display: flex;
                    flex-direction: row-reverse;
                    width: 100%;
                    cursor: pointer;
                }
                .items-container{
                    padding-left: 48px;
                    padding-top: 36px;
                    .list-items{
                        font-size: 22px;
                        font-weight: 500;
                        margin-bottom: 12px;
                    }
                }
            }
        }
    }
}
.cursor-pointer{
    cursor: pointer
}
</style>