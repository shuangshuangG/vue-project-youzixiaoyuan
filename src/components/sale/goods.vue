<template>
    <ul class="goodsList">
        <img v-if="!list" src="../../../public/timgs.gif" alt="" class="loading">
        <!-- <mt-spinner v-if="!list" type="fading-circle" class="loading"></mt-spinner> -->
        <li v-for="(item,index) of list" :key="index" :saleid="item.saleid">
            <img alt="" v-if="!item.click" :src="item.thumb">
            <img alt="" v-else v-lazy="'http://www.youzixy.com/Uploads/'+item.thumb">
            <p class="p1">
                <span class="price">￥{{item.price}}</span>
                <span class="clickNum">点击数 {{item.click}}</span>
            </p>
            <p class="p2">{{item.title}}</p>
            <p class="p3">
                <span class="schoolName">{{item.schoolname}}</span>
                <span class="certtype">{{item.certtype}}</span>
            </p>
        </li>
    </ul>
</template>

<script>
    import $ from 'axios'
    import Bus from '../../bus.js'
    export default {
        name: 'goods',
        data: () =>{
            return {
                list: ''
            }
        },
        mounted() {
            $.post('/sale/mobileajax?page=3&order=10')
            .then((result) => {
                this.list = result.data.res

                Bus.$on('goodsData',(goodsData) =>{
                    this.list.unshift(goodsData)
                    console.log(this.list)
                })
            })

        },
    }
</script>

<style lang="scss" scoped>
    @import '../../style/usage/core/reset.scss';
    img[lazy=loading] {
        width: 100%;
        height: 1.4rem;
        margin: auto;
        background: url("../../../public/loading.gif");
    }
    .goodsList{
        width: 100%;
        height: 100%;
    }
    .loading{
        width: 100%;
        margin-top: 14%;
    }
    li{
        float: left;
        width: 47%;
        height: 2.15rem;
        background: #fff;
        margin-left: 2%;
        margin-top: .25rem;
        border-radius: 5px;
        padding: .05rem;
        position: relative;
        border: 1px solid #dfdfdf;
        &::after{
            content: "";
            position: absolute;
            width: 92%;
            height: .06rem;
            bottom: -0.06rem;
            left: 4%;
            border-radius: 0 0 5px 5px;
            background: #fff;
            border: 1px solid #dfdfdf;
        }
        img{
            width: 100%;
            border-radius: 5px;
            height: 1.4rem;
        }
        .p1{
            .price{
                color: red;
                font-size: 16px;
            }
            .clickNum{
                color: #888;
                float: right;
                font-size: 13px;
            }
        }
        .p2{
            color: #1b816c;
            font-size: 13px;
            font-weight: 400;
            text-align: left;
            height: 20px;
            line-height: 20px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            width: 100%;
            word-break: break-all;
            word-wrap: break-word;
        }
        .p3{
            .schoolName{
                font-size: 13px;
                height: 16px;
                line-height: 16px;
                display: inline-block;
                width: 65%;
                color: #858d8e;
                overflow: hidden;
                text-align: left;
            }
            .certtype{
                color: #858d8e;
                float: right;
                width: 35%;
                text-align: right;
                font-size: 11px;
                height: 16px;
                line-height: 16px;
                overflow: hidden;
            }
        }
    }
</style>