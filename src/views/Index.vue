<template>
    <div class="wrapper">
        <div class="sale content">
            <router-view></router-view>
            <myhead></myhead>
            <div class="goodsBody">
                <search router="index"></search>
                <sort></sort>
                <goods></goods>
            </div>
        </div>
    </div>
</template>

<script>

import myhead from '../components/Header'
import search from '../components/search'
import sort from '../components/sale/sort'
import goods from '../components/sale/goods'
import BScroll from 'better-scroll'

export default {
    name: 'index',
    components: {
        myhead,
        search,
        sort,
        goods
    },
    methods: {
        handelClick(){
            this.$router.push({
                name: 'buyIndex'
            })
        }
    },
    mounted() {
        let scroll = new BScroll('.wrapper')
        console.log(scroll)
    },
}
</script>

<style lang="scss" scoped>
    .wrapper{
        height: 100%;
    }
    .sale{
        height: 101%;
        width: 100%;
    }
    .goodsBody{
        width: 100%;
        position: absolute;
        top: .45rem;
        bottom: .54rem;
        overflow-y: scroll;
    }
</style>
