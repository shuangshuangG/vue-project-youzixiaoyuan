<template>
    <div class="head">
        <div>
            <i class="fa  fa-angle-left" @click="handleClick"></i>
            <span>{{title}}</span>
        </div>
    </div>
</template>

<script>
    import Bus from '../bus'
    export default {
        name: 'myheade',
        props: ["title"],
        methods:{
            handleClick(){
                this.$router.push("/user")
                Bus.$emit('isShow',true)
            }
        }
    }
</script>

<style  lang="scss" scoped>
    @import '../style/usage/core/reset.scss';
    .head{
        position: relative;
        height: .45rem;
        background: #fff;
        font-size: .16rem;
        div{
            text-align: center;
            line-height: .45rem;
            span{
                color: #666;
                font-size: .15rem;
            }
            i{
                position: absolute;
                line-height: .45rem;
                left: .2rem;
                font-size: 16px;
            }
        }
    }
</style>