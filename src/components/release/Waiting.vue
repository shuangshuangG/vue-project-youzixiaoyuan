<template>
    <div class="waiting">
        <div class="box" v-if="!isLogin.name">
            <div><span>Tips - 柚子校园</span></div>
            <div>
                <span>请您先登录，正在跳转登录页</span>
                <i>页面自动 &nbsp;<b @click="handelSkip">跳转</b>&nbsp; 中等待时间：<a>{{time}}</a></i>
            </div>
        </div>

        <div v-else class="publish">
            <!-- 即将跳转到发布商品页 -->
            <publish v-if="type == 'publish'"></publish>
            <wantBuy v-else :user='isLogin.name'></wantBuy>
        </div>
    </div>
       
</template>

<script>
    import Bus from '../../bus'
    import { mapState } from 'vuex'
    import publish from './publish.vue'
    import wantBuy from './wantBuy.vue'
    export default {
        name:"waiting",
        data(){
            return {
                time: 0,
                timer: '',
                type: ''
            }
        },
        methods:{
            countDown(){
                this.time--;
            },
            handelSkip(){
                clearInterval(this.timer)
                this.$router.push("/user/login")
            }
        },
        mounted () {
            if(!this.isLogin.name){
                this.time = 3
                this.timer = setInterval(this.countDown,1000)
            }
            this.type = this.route
            // console.log(this.route)
            // console.log(this)
        },
        beforeRouteEnter (to, from, next) {
            Bus.$emit('isShow',false)
            next()
        },
        beforeRouteLeave (to, from, next) {
            Bus.$emit('isShow',true)
            this.$destroy()
            next()
        },
        watch:{
            time:function(){
                if(this.time == 0){
                    this.$router.push("/user/login")
                    // Bus.$emit('isShow',true)
                    clearInterval(this.timer)
                }
            }
        },
        computed: {
            ...mapState(['isLogin']),
            ...mapState(['route'])
        },
        components: {
            publish,
            wantBuy
        }
    }
</script>

<style lang="scss" scoped>
@import '../../style/usage/core/reset';
    .waiting{
        width: 100%;
        height: 100%;
        background: #fafafa;
        .box{
            width: 3.48rem;
            height: 2.7rem;
            background: #fff;
            position: relative;
            top: .52rem;
            margin-left: .13rem;    
            @include flexbox();
            flex-direction: column;
            @include align-items();
            box-shadow: 0px 0px  3px 1px #aaa;
            // @include box-shadow(0px 0px  3px 1px #aaa);
            div:first-child{
                span{
                    @include flexbox();
                    @include align-items();
                    @include justify-content();
                    @include border(0 0 1px 0 ,#ddd,solid );
                    width: 3.16rem;
                    height: .62rem;
                    font-size: .13rem;
                    }
            }
            div:last-child{
                @include flexbox();
                // @include border(1px 1px 1px 1px ,#f5f5f5,solid );
                box-shadow: 0px 0px  2px 1px #aaa inset;
                @include justify-content();
                @include align-items();
                flex-direction: column;
                width: 3rem;
                height: 1.52rem;
                background: #f5f5f5;
                margin-top: .16rem;
                span{
                    @include flexbox();
                    @include align-items();
                    @include justify-content();
                    width: 2.67rem;
                    height: .18rem;
                    font-size: 17px;
                    color: #ff6600;  
                }
                i{
                    @include flexbox();
                    @include align-items();
                    @include justify-content();
                    width: 2.67rem;
                    height: .17rem;
                    font-size: 12px;
                    margin-top: .4rem;
                    b{
                        color: #37b97d;
                    }
                    a{
                        color: #000;
                    }
                }
            }
        }
        .publish{
            height: 100%;
        }
    }
 

</style>