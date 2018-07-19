<template>
    <div class="wrapper">
        <div class="buy content">
            <myhead></myhead>
            <div class="buyBodyMain">
                <search></search>
                <sort></sort>
                <buyList></buyList>
            </div>
        </div>
    </div>
</template>

<script>

import myhead from '../components/Header'
import sort from '../components/sale/sort'
import search from '../components/search'
import buyList from '../components/buy/buy'
import BScroll from 'better-scroll'

export default {
    name: 'buy',
    components: {
        myhead,
        search,
        sort,
        buyList
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
    .buy{
        height: 101%;
        width: 100%;
    }
    .buyBodyMain{
        position: absolute;
        top: .45rem;
        bottom: .62rem;
        width: 100%;
        overflow-y: scroll;
    }
</style>
