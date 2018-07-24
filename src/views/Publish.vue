<template>
    <div>
        <router-view></router-view>
        <div>这是发布页面的内容</div>
    </div>
</template>

<script>
import Bus from '../bus.js'
    export default {
        name: 'publish',
        beforeRouteLeave (to, from, next) {
            Bus.$emit('isShow', true)
            next()
        }
    }
</script>

<style scoped>

</style>