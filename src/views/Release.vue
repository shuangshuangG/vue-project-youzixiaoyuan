<template>
    <div class="release">
        <router-view></router-view>
        <myhead></myhead>
        <release></release>
    </div>
</template>

<script>

import myhead from '../components/release/Header'
import release from "../components/release/Release"

export default {
    name: 'rhead',
    components: {
        myhead,
        release
    }
}
</script>

<style lang="scss" scoped>
    .release{
        height: 100%;
        width: 100%;
    }
</style>
