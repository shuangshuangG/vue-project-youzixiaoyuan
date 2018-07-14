<template>
    <div class="sale">
        <router-view></router-view>
        <myhead></myhead>
        <div class="goodsBody">
            <search router="index"></search>
            <sort></sort>
            <goods></goods>
        </div>
    </div>
</template>

<script>

import myhead from '../components/Header'
import search from '../components/search'
import sort from '../components/sale/sort'
import goods from '../components/sale/goods'

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
    }
}
</script>

<style lang="scss" scoped>
    .sale{
        height: 100%;
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
