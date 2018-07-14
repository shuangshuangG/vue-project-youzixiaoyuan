<template>
    <div class="user">
        <router-view></router-view>
        <myhead></myhead>
        <user></user>
    </div>
</template>

<script>

import myhead from '../components/user/Header'
import user from "../components/user/User"

export default {
    name: 'uhead',
    components: {
        myhead,
        user
    }
}
</script>

<style lang="scss" scoped>
    .user{
        height: 100%;
        width: 100%;
    }
</style>
