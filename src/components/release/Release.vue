<template>
    <div>
        <div class="itemSale">
            <span class="text" @click="handleclick" >发布二手</span>
        </div>
        <div class="itemBuy">
            <span class="text">发布求购</span>
        </div>
    </div>
</template>

<script>
    export default {
        methods: {
            handleclick(){
                this.$router.push('release/waiting')
            }
        }
       
    }
</script>

<style lang="scss" scoped>
@import '../../style/usage/core/reset';
    .itemSale{
        width: 100%;
        height: 2.9rem;
        background-color: rgb(220,220,220);
        @include border(0 0 1px 0 ,#fff,solid );
        @include flexbox();
        @include justify-content();
        @include align-items();
        span{   
            font-size: .5rem;
            color: #fff;
        }
    }
    .itemBuy{
        width: 100%;
        height: 2.89rem;
        background-color: rgb(220,220,220);  
        @include flexbox(); 
        @include justify-content();
        @include align-items();
        span{   
            font-size: .5rem;
            color: #fff;
        }     
    }
</style>