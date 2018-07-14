<template>
    <main>
        <type></type>
        <div :class="'mainBody '+classname">
            <div v-if="mask" class="mask" @click="handelMask"></div>
            <keep-alive>
                <router-view></router-view>
            </keep-alive>
            
            <tabbar v-if="isShow"></tabbar>
        </div>
    </main>
</template>

<script>

import tabbar from './components/tabbar'
import Bus from './bus.js'
import type from './components/type'

export default {
    name: 'app',
    components: {
        tabbar,
        type
    },
    data() {
        return {
            isShow: true,
            classname: '',
            mask: false
        }
    },
    mounted() {
        // console.log(1)
        Bus.$on('isShow',res =>{
            this.isShow = res
            // console.log(res)
        })
        Bus.$on('isSlide',res =>{
            if(res){
                this.classname = 'slideLeft'
                this.mask = true
            }
            else{
                this.classname = 'slideRight'
                this.mask = false
            }
        })
    },
    methods: {
        handelMask(){
            this.classname = 'slideRight'
            this.mask = false
            Bus.$emit('isSlide',false)
        }
    }
}
</script>


<style lang="scss">
    @import './style/usage/core/reset.scss';
    @import './assets/font-awesome-4.7.0/scss/font-awesome.scss';

    main{
        height: 100%;
        position: relative;
        .mainBody{
            height: 100%;
            width: 100%;
        }
    }
    body{
        background: #f0f0f0;
    }
    .slideLeft{
        transform: translateX(50%);
        transition: .2s all linear;
    }
    .slideRight{
        transform: translateX(0%);
        transition: .2s all linear;
    }
    .mask{
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,.3);
        position: absolute;
        z-index: 4;
    }
</style>