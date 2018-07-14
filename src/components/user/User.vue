<template>
    <div class="user">
        <div class="my-info" v-if="!isLogin.name">
            <img src="http://www.youzixy.com/Public/images/icon/pleaselogin.png" alt="">
            <p class="nickname"><i @click="handleloginclick">登录</i> | <i @click="handleregisterclick">注册</i></p>
            <p class="qianming">登录更精彩！</p>
        </div>

        <div class="my-info" v-else>
            <img src="http://www.youzixy.com/Uploads/heads/default10.png" alt="">
            <p class="nickname">{{isLogin.name}}({{isLogin.Authentication}})</p>
            <p class="qianming">{{isLogin.autograph | autograph(isLogin.autograph)}}</p>
        </div>

        <div  class="aui-content">
            <div v-for="item of listMsg" class="aui-list-view-cell" :key="item.id" @click="handleListclick(item.path)">
                <a>
                    <i slot="icon" :class="item.icon"></i>
                    {{item.name}}
                </a>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        data () {
            return {
                listMsg:[
                    {
                        id:"first",
                        icon:"fa fa-address-card",
                        name:"认证中心",
                        path:"/index"
                    },
                    {
                        id:"second",
                        icon:"fa fa-pencil-square-o",
                        name:"编辑资料",
                        path:""
                    },
                    {
                        id:"third",
                        icon:"fa fa-picture-o",
                        name:"已发布二手",
                        path:""
                    },
                    {
                        id:"fourth",
                        icon:"fa fa-file-text-o",
                        name:"已发布求购",
                        path:""
                    },
                    {
                        id:"fifth",
                        icon:"fa fa-heartbeat",
                        name:"我的收藏",
                        path:""
                    },
                    {
                        id:"sixth",
                        icon:"fa fa-eye",
                        name:"小柚子",
                        path:""
                    }
                ]
            }
        },
        methods: {
            handleListclick(path){
                alert(1)
                this.$router.push({
                    path
                })
            },
            handleloginclick(){
                this.$router.push("/user/login")
            },
            handleregisterclick(){
                this.$router.push("/user/register")
            }
        },
        computed: {
            ...mapState(['isLogin'])
        },
        filters: {
            autograph: function(value){
                if(!value) return 'ta很懒，还没有留下签名哦~'
                return value
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../style/usage/core/reset";
    .user{  
        background: #fff;
        .my-info{
            @include flexbox();
            @include align-items();
            @include justify-content();
            flex-direction: column;
            width: 100%;
            height: 1.84rem;
            background: #dcdcdc;
            img{
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
            }
            .nickname{
                font-size: .18rem;
                color: #8f8f94;
                margin-top: .05rem;
                position: relative;
                i{
                   position: relative;
                   top: 2px;
                   font-size: .18rem;
                }
            }
            .qianming{
                font-size: .14rem;
                color: #8f8f94;
                margin-top: .05rem;
                
            }
        }
        .aui-content {
            position: relative;
            list-style: none;
            background-color: #fff;
            margin-left: 4%;
            .aui-list-view-cell{
                line-height: .26rem;
                position: relative;
                padding: .12rem .15rem;
                @include border(0px 0px 1px 0px  );
                a{
                    font-size: .15rem;
                    color: #666;
                    i{
                        position: relative;
                        left: -.1rem;
                    }
                }
            }
        }
    }
</style>