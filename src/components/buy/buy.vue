<template>
    <div class="buyBody">
        <img v-if="!List" src="../../../public/timgs.gif" alt="" class="loading">
        <div class="goods" v-for="(item,index) of List" :key="index">
            <div class="goodsLeft">
                <img v-lazy="`http://www.youzixy.com/Uploads/heads/${item.headpic}`" alt="" v-if="item.headpic.substr(0,4)!='http'">
                <img src="http://www.youzixy.com/Public/images/icon/errorhead.png" alt="" v-else>
                <p>{{item.username}}</p>
            </div>
            <div class="goodsRight">
                <div class="Top">
                    <p class="tilte">{{item.title}}</p>
                    <p class="detail">{{item.detail}}</p>
                </div>
                <div class="bottom">
                    <p class="pricetime">
                        <span class="price">期望价格&nbsp;￥&nbsp;{{item.price}}</span>
                        <span class="time">{{item.buytime}}</span>
                    </p>

                    <p class="tel num" id="yz-callnum">
                        <span class="tel num">
                            电话：
                        <span>{{item.tel}}</span>
                            <a href="tel://13299103877" class="call">打电话</a>
                            <a href="sms:13299103877 ">发短信</a>
                         </span>
                    </p>

                    <p class="qq">
                        <span class="qq num">
                             Q Q：{{item.qqnum}}
                            <span class="noinfo" v-if="!item.qqnum">他木有留下QQ号码噢！</span> 
                            <a v-else>qq联系</a>
                        </span>
                    </p>
                    
                    <p class="qq">
                         <span class="qq num">
                            微信：
                            <span class="noinfo">他木有留下微信号噢！</span>
                        </span>
                    </p>

                    <p class="schooladdress">
                        <span class="school">学校：{{item.schoolname}}</span>
                    </p>

                </div>
            </div>

        </div>
    </div>
</template>

<script>
import $ from "axios"
    export default {
        data(){
            return{
                List:''
            }
        },
      mounted() {
          $.get("/buy/mobileajax")
          .then((result)=>{
              this.List = result.data.res
          })
      },
    }
</script>

<style lang="scss" scoped>
@import "../../style/usage/core/reset";
    img[lazy=loading] {
        width: .6rem;
        height: .6rem;
        margin: auto;
        background: url("../../../public/loading.gif");
    }
    .buyBody{
        color: #8f8f94;
        width: 100%;
        overflow-y: scroll;
        padding: .1rem;
        .loading{
            width: 100%;
            margin-top: 14%;
        }
        .goods{
            border: 1px solid #dedbdb;
            border-radius: 3px;
            width: 100%;
            @include flexbox();
            background: #fff;
            margin-top: .2rem;
            .goodsLeft{
                @include flex(2);
                @include align();
                @include flex-direction(column);
                img{
                    display: block;
                    width: .6rem;
                    height: .6rem;
                    border-radius: 50%;
                }
                p{
                    width: 80%;
                    text-align: center;
                    white-space: normal;
                    text-overflow: ellipsis;
                    overflow: hidden;
                }
            }
            .goodsRight{
                @include flex(8);
                .Top{
                    width: 100%;
                    margin-top: .1rem;
                    @include border(0 0 .01rem 0);
                    .detail{
                        font-size: .12rem;
                        color: #888;
                    }
                    .title{
                        font-size: .15rem;
                        color: rgb(100,100,100);
                    }
                }
                .bottom{
                    p{
                        margin-top: 10px;
                    }
                    .time{
                        float: right;
                        margin-right: .1rem;
                    }
                }
            }
        }
        .call{
            margin: 0 .1rem;
        }
        a{
            font-size: 13px;
        }
    }
    

</style>