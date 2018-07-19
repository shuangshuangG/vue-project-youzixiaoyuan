<template>
    <div class="wrapper">
        <div class="user">
            <router-view></router-view>
            <myhead></myhead>
            <user></user>
        </div>
    </div>
</template>

<script>

import myhead from '../components/user/Header'
import user from "../components/user/User"
import BScroll from 'better-scroll'

export default {
    name: 'uhead',
    components: {
        myhead,
        user
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
    .user{
        height: 101%;
        width: 100%;
    }
</style>
