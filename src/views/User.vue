<template>
    <div class="wrapper" ref="wrapper">
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
        this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.wrapper, {click: true})
        })
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
