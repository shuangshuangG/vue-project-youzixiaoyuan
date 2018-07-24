<template>
    <div class="body">
        <div class="detailHeader">
            <i class="fa fa-angle-left" @click="back"></i>
            <span>商品详情</span>
        </div>
        <div class="main">
            <div class="main1">
            <div class="swiper">
            <mt-swipe  :show-indicators="false" :auto="0">
                <mt-swipe-item  >
                    <img class="img" :src="`http://www.youzixy.com/Uploads/${detail.thumb}`" alt="">
                </mt-swipe-item>
            </mt-swipe>
            </div>
            <div class="price">
                <div class="priceLeft">￥<span>{{detail.price}}</span>元</div>
                <div class="priceRight">不可小刀</div>
            </div>
            <div class="detail">
                <div class="title">{{detail.title}}</div>
                <div class="detailMain">qq:（269476472）长期出售各地区高清DVD电影光盘，种类多品种齐全，有资料提供选择，有日本各专业著名AV片厂出品的高清类DVD影片，全盒装AV，蓝光blu-ray，盘片全属高质量，绝无裁剪完整原版，绝非网络下载的那种格式转换过来的，价格合理，全国各地保密快递方式发货，寻片购买的请联系。QQ：269476472※☆若QQ加不上请将您QQ号码等联系方式发至我们邮箱： 269476472@qq.com 我们会主动联系你及提供目录资料※☆(联系我的时候，请说明是在柚子校园看见的噢！)  
                </div>
                <div class="line"></div>
                <div class="detailFoot">
                   <p><span class="time">时间：{{date(detail.saletime)}}</span><span class="num">浏览：{{detail.click}}</span></p> 
                    <span class="school">学校：{{detail.schoolname}} (快递)</span>
                </div>

            </div>
            </div>
            <div class="user">
                <div class="userTop">
                    <div class="left">
                        <img src="" alt="">
                    </div>
                    <div class="right">
                        <p class="name">XXXXX</p>
                        <p class="renzheng">未认证</p>
                    </div>
                </div>
                <div class="line"></div>
                <div class="userBottom">
                    <p class="phone">手机：13414941882 <span>打电话</span> <span>发短信</span></p>
                    <p class="qq">Q Q ：269476472 <span>QQ联系</span></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Bus from '../bus'
import { Swipe, SwipeItem } from 'mint-ui';
import {mapState} from "vuex"
export default {
    name: 'detail',
        data(){
            return {                                                                                                         
                imgList:[
                    {
                        src:"//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg"
                    },
                    {
                        src:"//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg"
                    },
                    {
                        src:"//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg"
                    },
                    {
                        src:"//img1.qunarzz.com/qs/1610/a6/01d1ad00e4b9e102.jpg"
                    }
                ]
                
            }
        },
        components: {
            "mt-swipe":Swipe,
            "mt-swipe-item": SwipeItem
        },
        beforeRouteEnter (to, from, next) {
            Bus.$emit('isShow',false)
            next()
        },
        beforeRouteLeave (to, from, next) {
            Bus.$emit('isShow',true)
            next()
            this.$destroy();
        },
        methods: {
            back(){
                history.back()
            },
            date(time){
                var date =  new Date((time+"000")*1).toLocaleDateString().replace(/\//g,"-")
                return date;
            }
        },
        computed:{
            ...mapState(["saleid"]),
            ...mapState(["detail"])
            // console.log(this.saleid)
        },
        mounted(){
            console.log(1)
            console.log(this.detail);
        }
    }
</script>

<style lang="scss" scoped>
    @import "../style/usage/core/reset.scss";
    .main{
        overflow-y: scroll;
        width: 100%;
        height: 6.21rem;
        .main1{
            margin-bottom: 0.2rem;
            .swiper{
                width: 100%;
                height: 2.54rem;
                background: #fff;
                .img{
                    width:100%;
                    height: 100%;
                }
            }
            .price{
                width: 100%;
                background: #ffcc00;
                height: 0.5rem;
                display: flex;
                .priceLeft{
                    flex:1;
                    padding-left: 0.15rem;
                    color: #ffffff;
                    font-size: 0.16rem;
                    line-height: 0.5rem;
                    span{
                        font-size: 0.26rem;
                        margin: 0 0.05rem;
                        font-weight: 400;
                        display: inline-block;
                    }

                }
                .priceRight{
                    width: 1.5rem;
                    background: #66CC99;
                    line-height: 0.5rem;
                    font-size: 0.12rem;
                    text-align: center;
                    color: #fff;

                }
            }
            .detail{
                background: #fff;
                padding: 0.1rem;
                .title{
                    margin-bottom: 0.05rem;
                    font-size: 0.16rem;
                    color: #666;
                }
                .detailMain{
                    font-size: 0.13rem;
                    color: rgb(143,143,148);
                }
                .line{
                    margin: 0.07rem 0;
                    height: .01rem;
                    width: 100%;
                    background: #ccc;
                }
                p{
                    display: block;
                    .time{
                        
                        color: rgb(143,143,148);
                    }
                    .num{
                        float: right;
                        color: rgb(143,143,148);
                    }
                }
                .school{
                    display: block;
                    color: rgb(143,143,148);
                }

            }
        }
        .user{
            margin-bottom: 0.2rem;
            background: #ffffff;
            
            .userTop{
                width:100%;
                height: 0.7rem;
                padding:0.11rem 0.15rem; 
                display: flex;
                .left{
                    height: 100%;
                    width:0.48rem;
                    background: #ffcc00;    

                }
                .right{
                    margin-left:0.2rem;
                    .name{
                        color: #333333;
                        
                        font-weight: 400;
                        font-size: 0.16rem;
                    } 
                    .renzheng{
                            margin-top: 0.03rem;
                            font-size: 0.13rem;
                    }
                }
            }

            .line{
                width: 100%;
                height: 0.01rem;
                background: #ccc;
            }
            .userBottom{
                color: rgb(140,140,140);
                height: 0.68rem;
                width: 100%;
                padding: 0.11rem 0.15rem;
                .phone{
                    span{
                        color: rgb(0,170,136);
                        display: inline-block;
                        margin-left: 0.15rem;
                    }
                }
                .qq{
                    span{
                        color: rgb(0,170,136);
                        display: inline-block;
                        margin-left: 0.15rem;
                    }
                }
            }
            

        }
        
    }
    .detailHeader{
        height: .46rem;
        background: #fff;
        text-align: left;
        line-height: .46rem;
        position: relative;
        font-size: 15px;
        text-align: center;
        i{
            position: absolute;
            font-size: 22px;
            top: .1rem;
            left: .15rem;
        }
    }

</style>

