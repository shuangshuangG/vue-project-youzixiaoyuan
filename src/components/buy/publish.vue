<template>
    <div>
        <div @click="handelClick">发布二手</div>
    </div>
</template>

<script>
    import Bus from '../../bus.js'
    
    export default {
        name: 'publish',
        methods: {
            handelClick(){
                this.$router.push({
                    name: 'publish'
                })
                Bus.$emit('isShow', false)
            }
        }
    }
</script>

<style scoped>

</style>