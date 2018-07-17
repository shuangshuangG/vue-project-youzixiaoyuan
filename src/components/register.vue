<template>
    <div class="registerBody">
        <myhead :title="'注册'"></myhead>
        <div class="login">
            <div class="main">
                <div class="reg">

                    <div class="item " v-for="item of userMsg" :key="item.id">
                        <label>{{item.name}}&nbsp;&nbsp;|</label>
                        <input type="text" :placeholder="item.placeholder" v-model="item.context">
                    </div>

                    <div><input class="checked" type="checkbox" checked="checked"><a>我同意</a>&nbsp;&nbsp;<a id="agree"><i class="fa  fa-angle-left"></i> <i class="fa  fa-angle-left"></i>&nbsp;&nbsp;柚子校园用户协议&nbsp;&nbsp;<i class="fa  fa-angle-right"></i><i class="fa  fa-angle-right"></i> </a></div>
                    <div><input class="checked" type="checkbox" checked="checked"><a>记住我的登录状态</a></div>
                    

                    <div class="Button" @click="handelRegister">注&nbsp;册</div>

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
            popup-transition="popup-fade">{{Prompt}}
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
                        placeholder:"请输入用户名",
                        context: ''
                    },
                    {
                        id:"U2",
                        name:"密码",
                        placeholder:"请输入密码",
                        context: ''
                    },
                    {
                        id:"U3",
                        name:"邮箱",
                        placeholder:"请输入邮箱",
                        context: ''
                    },
                    {
                        id:"U4",
                        name:"学校",
                        placeholder:"请输入学校",
                        context: ''
                    }
                ],
                popupVisible: false,
                Prompt: '用户名有误！'
            }
        },
        beforeRouteEnter (to, from, next) {
            // console.log(1)
            Bus.$emit('isShow',false)
            next()
        },
        beforeRouteLeave (to, from, next) {
            Bus.$emit('isShow',true)
            next()
        },
        methods: {
            ...mapActions(['register']),
            handleClick(){
                this.$router.push("/user/register")
            },
            handelRegister(){
                let val = []
                this.userMsg.forEach(function(item){
                    val.push(item.context)
                })
                let userObj = {
                    userName: val[0],
                    passWord: val[1],
                    email: val[2],
                    school: val[3]
                }
                for(const ele in userObj){
                    if(!userObj[ele]){
                        this.Prompt = '请填完信息再走...'
                        this.popupVisible = true
                        return
                    }
                }
                let result = this.register(userObj)
                result.then(res =>{
                    if(res){
                        // alert('注册成功，点击跳往登录页')
                        this.Prompt = '注册成功，即将跳往登录页'
                        this.popupVisible = true
                        setTimeout(() =>{
                            this.popupVisible = false
                            this.$router.push('/user/login')
                        },1000)
                    }
                    else{
                        this.Prompt = '该用户已存在！'
                        this.popupVisible = true
                    }
                })
                
            }
        }
    }
</script>

<style lang="scss" scoped>
@import "../../src/style/usage/core/reset";
    .registerBody{
        height: 100%;
        .mint-popup{
            height: 1rem;
            width: 50%;
            padding: .2rem .2rem;
            border-radius: .04rem;
            text-align: center;
            font-size: 14px;
            color: skyblue;
        }
    }
    .login{
        background: #f0f0ff;
        height: 100%;
        .main{
            height: 2.74rem;
            @include flexbox();
            @include justify-content();
            #agree{
                    color: #66CC99;
                }
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