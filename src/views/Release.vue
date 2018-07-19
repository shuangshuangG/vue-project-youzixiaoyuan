<template>
    <div class="wrapper">
        <div class="release">
            <router-view></router-view>
            <myhead></myhead>
            <release></release>
        </div>
    </div>
</template>

<script>

import myhead from '../components/release/Header'
import release from "../components/release/Release"
import BScroll from 'better-scroll'

export default {
    name: 'rhead',
    components: {
        myhead,
        release
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
    .release{
        height: 101%;
        width: 100%;
    }
</style>
