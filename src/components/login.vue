<template>
    <div class="loginBody">
        <myhead :title="'登录'"></myhead>
        <div class="login">
            <div class="main">
                <div class="reg">

                    <div class="item " v-for="item of userMsg" :key="item.id">
                        <label>{{item.name}}&nbsp;&nbsp;|</label>
                        <input v-if="item.id == 'U2'" type="password" :placeholder="item.placeholder" v-model="item.context">
                        <input v-else type="text" :placeholder="item.placeholder" v-model="item.context">
                    </div>
                    
                    <input class="checked" type="checkbox" checked="checked"><a>记住我的登录状态</a>

                    <div class="Button" @click="handelLogin">登&nbsp;录</div>

                    <div class="other">
                        <a>忘记密码</a>&nbsp;
                        |&nbsp;&nbsp;
                        <a @click="handleClick">立即注册</a>
                    </div>

                </div>
            </div>
        </div>

         <mt-popup
            v-model="popupVisible"
            position="top">{{Prompt}}
        </mt-popup>
    </div>
</template>

<script>
import myhead from "../components/Userheader"
import { mapActions } from "vuex"
import Bus from "../bus.js"
    export default {
        name:"login",
        components:{
            myhead
        },
        data(){
            return{
                userMsg:[
                    {
                        id:"U1",
                        name:"账号",
                        placeholder:"请输入用户名/邮箱",
                        context: ''
                    },
                    {
                        id:"U2",
                        name:"密码",
                        placeholder:"请输入密码",
                        context: ''
                    }
                ],
                popupVisible: false,
                Prompt: '用户名有误！'
            }
        },
        methods: {
            ...mapActions(['login']),
            handleClick(){
                this.$router.push("/user/register")
            },
            handelLogin(){
                let userObj = []
                this.userMsg.forEach(function(item){
                    userObj.push(item.context)
                })
                let userData = {
                    userName: userObj[0],
                    passWord: userObj[1]
                }
                let res = this.login(userData)
                res.then(res =>{
                    if(!res.userName && !res.name){
                        // alert('用户名有误！')
                        this.Prompt = '用户名有误！'
                        this.popupVisible = true
                    }
                    else if(!res.passWord && !res.name){
                        // alert('密码不正确')
                        this.Prompt = '密码不正确'
                        this.popupVisible = true
                    }
                    else{
                        this.$router.replace('/user')
                    }
                })
            }
        },
        beforeRouteEnter (to, from, next) {
            // console.log(3)
            Bus.$emit('isShow',false)
            next()
        },
        beforeRouteLeave (to, from, next) {
            Bus.$emit('isShow',true)
            next()
        }
    }
</script>

<style lang="scss" scoped>
@import "../../src/style/usage/core/reset";
    .loginBody{
        height: 100%;
        .mint-popup{
            width: 100%;
            height: .6rem;
            font-size: 14px;
            text-align: center;
            color: skyblue;
            line-height: .6rem;
        }
    }
    .login{
        background: #f0f0ff;
        height: 100%;
        .main{
            height: 2.74rem;
            // background: red;
            @include flexbox();
            @include justify-content();
            .reg{
                width: 3.55rem;
                height: 1.45rem;
                margin-top: .1rem;
                .item{
                    @include flexbox();
                    @include align-content();
                    width: 100%;
                    height: .5rem;
                    background: #fff;
                    margin-top: 10px;
                    padding-left: .1rem;
                    label{
                        color: #555;
                        display: inline-block;
                        font-size: .16rem;
                        width: .46rem;
                        height: 100%;
                        line-height: .5rem;
                        text-align: center;
                    }
                    input{
                        width: 2.24rem;
                        border: none;
                        margin-left: 10px;
                    }
                }
                .checked{
                    margin-top: 10px;
                }
                a{
                    color: #555;
                    font-size: .16rem;
                }
                .Button{
                    @include flexbox();
                    @include align();
                    width: 3.55rem;
                    height: .46rem;
                    background: #aaa;
                    color: #fff;
                    font-size: .16rem;
                    border-radius: .03rem;
                    margin-top: .15rem;
                }
                .other{
                    @include flexbox();
                    @include align();
                    margin-top: .1rem;
                }
            }
        }
    }

</style>