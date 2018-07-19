<template>
    <div class="releaseBody">
        <div class="itemSale">
            <span class="text" @click="handleclick('publish')" >发布二手</span>
        </div>
        <div class="itemBuy">
            <span class="text" @click="handleclick('wantBuy')">发布求购</span>
        </div>
    </div>
</template>

<script>
    
    import { mapActions } from 'vuex'
    export default {
        methods: {
            ...mapActions(['setRoute']),
            handleclick(type){
                this.setRoute(type)
                this.$router.push('release/waiting')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/usage/core/reset';
    .itemSale{
        width: 100%;
        height: 50%;
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
        height: 50%;
        background-color: rgb(220,220,220);  
        @include flexbox(); 
        @include justify-content();
        @include align-items();
        span{   
            font-size: .5rem;
            color: #fff;
        }     
    }
    .wrapper{
        height: 84%;
    }
    .releaseBody{
        position: absolute;
        top: .45rem;
        bottom: .54rem;
        width: 100%;
    }
</style>