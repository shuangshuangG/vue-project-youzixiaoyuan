<template>
    <div class="buy">
        <myhead></myhead>
        <div class="buyBodyMain">
            <search></search>
            <sort></sort>
            <buyList></buyList>
        </div>
    </div>
</template>

<script>

import myhead from '../components/Header'
import sort from '../components/sale/sort'
import search from '../components/search'
import buyList from '../components/buy/buy'

export default {
    name: 'buy',
    components: {
        myhead,
        search,
        sort,
        buyList
    }
}
</script>

<style lang="scss" scoped>
    .buy{
        height: 100%;
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
