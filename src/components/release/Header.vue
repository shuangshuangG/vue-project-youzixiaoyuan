<template>
    <div class="head">
        <div>
            <span>发布</span>
        </div>
        <div>
            <i class="fa fa-download"></i>
            <span> APP</span>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'releaseHead'
    }
</script>

<style  lang="scss" scoped>
    @import '../../style/usage/core/reset.scss';
    .head{
        position: relative;
        height: .45rem;
        background: #fff;
        font-size: .16rem;
        >div:first-child{
            text-align: center;
            line-height: .45rem;
            text-indent: .05rem;
            text-align: center;
            font-size: .15rem;
        }
        >div:last-child{
            position: absolute;
            text-align: center;
            line-height: .45rem;
            text-align: right;
            right: .05rem;
            top: 0;
        }
    }
</style>