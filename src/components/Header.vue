<template>
    <div class="head">
        <div @click="handelType">
            <i class="fa fa-qrcode"></i>
            <span> 分类</span>
        </div>
        <div @click="showSchool">
            <span>当前是所有学校 </span>
            <i class="fa fa-angle-down"></i>
        </div>
        <div>
            <i class="fa fa-download"></i>
            <span> APP</span>
        </div>
    </div>
</template>

<script>
    import Bus from '../bus.js'
    export default {
        name: 'myhead',
        data() {
          return {
              isSlide: true
          }  
        },
        methods: {
            showSchool(){
                this.$router.push('school')
            },
            handelType(){
                Bus.$emit('isSlide',this.isSlide)
                this.isSlide = this.isSlide
            }
        }
    }
</script>

<style  lang="scss" scoped>
    @import '../style/usage/core/reset.scss';
    .head{
        @include flexbox();
        @include flex-direction(row);
        height: .45rem;
        background: #fff;
        font-size: .16rem;
        >div{
            @include flex(3);
            text-align: center;
            line-height: .45rem;
        }
        >div:first-child{
            @include flex(1);
            text-indent: .05rem;
            text-align: left;
        }
        >div:last-child{
            @include flex(1);
            text-align: right;
            padding-right: .05rem;
        }
    }
</style>