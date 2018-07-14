<template>
    <div class="head">
        <div>
            <a v-if="isLogin.name" @click="handelClear">注销</a>
            <span>个人中心</span>
        </div>
        <div>
            <i class="fa fa-download"></i>
            <span> APP</span>
        </div>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex'
    export default {
        name: 'releaseHead',
        computed: {
            ...mapState(['isLogin'])
        },
        methods: {
            ...mapActions(['clearLogin']),
            handelClear(){
                this.clearLogin()
            }
        }
    }
</script>

<style  lang="scss" scoped>
    @import '../../style/usage/core/reset.scss';
    .head{
        position: relative;
        height: .45rem;
        background: #fff;
        font-size: .16rem;
        >div:first-child{
            text-align: center;
            line-height: .45rem;
            text-indent: .05rem;
            text-align: center;
            font-size: .15rem;
            position: relative;
            a{
                position: absolute;
                left: .05rem;
            }
        }
        >div:last-child{
            position: absolute;
            text-align: center;
            line-height: .45rem;
            text-align: right;
            right: .05rem;
            top: 0;
        }
    }
</style>