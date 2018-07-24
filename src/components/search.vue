<template>
    <div class="search" v-if="isShow">
        <input type="search" name="" id="" placeholder="" @click="handelClick" v-model="msg" />
        <p @click="handelClick" class="p1">
            <i class="fa fa-search"></i>
            <span> {{placeHolder}}</span>
        </p>
    </div>
    <div class="search" v-else>
        <input class="inp2" type="search" name="" id="" :placeholder="placeHolder" @click="handelClick" v-model="msg">
        <i class="fa fa-close" @click="clearInput"></i>
        <p @click="handelClick" class="p2">
            <i class="fa fa-search"></i>
        </p>
        <span @click="closeInput">取消</span>
    </div>
</template>

<script>
    export default {
        name: 'search',
        props: ['router'],
        data() {
            return {
                isShow: true,
                msg: '',
                placeHolder: '请输入搜索内容'
            }
        },
        methods: {
            handelClick(){
                this.isShow = false
            },
            closeInput(){
                this.msg = ''
                this.isShow = true
            },
            clearInput(){
                this.msg = ''
            }
        },
        mounted() {
            if(this.router == 'school'){
                this.placeHolder = '输入学校首字母即可'
            }
            else this.placeHolder = '请输入搜索内容'
        },
    }
</script>

<style lang="scss" scoped>
.search{
    height: .5rem;
    position: relative;
    font-size: 14px;
    color: #c8c7cc;
    background: #ebeced;
    input {
        width: 92%;
        background: #ffffff;
        height: .32rem;
        margin-top: .09rem;
        margin-left: 4%;
        border-radius: 4px;
        border: none;
        text-align: left;
        text-indent: .28rem;
    }
    p{
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: .09rem;
        height: .32rem;
        line-height: .32rem;
    }
    >span{
        position: absolute;
        right: .15rem;
        top: .1rem;
        color: #3498db;
        font-size: 16px;
        height: .32rem;
        line-height: .32rem;
    }
    .inp2{
        width: 80%;
        color: #333;
    }
    .p2{
        left: 8%;
        top: .15rem;
        i{
            position: relative;
            top: -.06rem;
        }
    }
    .fa-close{
        position: absolute;
        right: 18%;
        top: 34%;
    }
}
</style>