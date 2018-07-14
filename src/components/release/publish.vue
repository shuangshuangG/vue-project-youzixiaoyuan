<template>
    <!-- form start -->
    <form class="form-horizontal" action="***" method="post" enctype="multipart/form-data">
        <p class="title"><i class="fa fa-angle-left" @click="handelBack"></i> 发布商品</p>
        <div v-if="next" class="box-body">
            <div class="form-group">
                <div v-if="goodsMsg.pic.length" class="picGroup">
                    <a v-for="(item, index) of goodsMsg.pic" :key="index">
                        <img :src="item" alt="" class="img" >
                        <span @click="handelDelPic(index)">删除</span>
                    </a>
                </div>
                <!-- <img src="" alt="" id="img"> -->
                <label for="photo" class="photo"><i>+</i>最多四张</label>
        
                <div>
                    <input type="file" multiple name="photo" id="photo" placeholder="请选择商品图片" @change="handelPic">
                </div>
            </div>
            <div class="form-group">
                <label for="tltle">标题</label>
        
                <div>
                    <input type="text" name="tltle" id="tltle" placeholder="请填写商品标题" v-model="goodsMsg.title">
                </div>
            </div>
            <div class="form-group">
                <label for="price">价格</label>
        
                <div>
                    <input type="text" name="price" id="price" placeholder="请填写商品价格" v-model="goodsMsg.price">
                </div>
            </div>
            <div class="form-group">
                <label for="msg">详情</label>
        
                <div>
                    <input type="text" name="msg" id="msg" placeholder="请填写商品详情" v-model="goodsMsg.msg">
                </div>
            </div>
            <div class="box-footer">
                <button type="button" @click="handelNext">下一步</button>
            </div>
        </div>

        <div v-else class="box-body next-group">
            <div class="form-group">
                <label for="type">分类</label>
        
                <div>
                    <input type="text" name="type" id="type" placeholder="分类" v-model="goodsMsg.type">
                </div>
            </div>
            <div class="form-group">
                <label for="school">学校</label>
        
                <div>
                    <input type="text" name="school" id="school" placeholder="请填写学校" v-model="goodsMsg.school">
                </div>
            </div>
            <div class="form-group">
                <label for="place">交易地点</label>
        
                <div>
                    <input type="text" name="place" id="place" placeholder="交易地点，如食堂，宿舍等" v-model="goodsMsg.place">
                </div>
            </div>
            <div class="form-group">
                <label for="phone">手机</label>
        
                <div>
                    <input type="text" name="phone" id="phone" placeholder="手机" v-model="goodsMsg.phone">
                </div>
            </div>
            <div class="form-group">
                <label for="QQ">QQ</label>
        
                <div>
                    <input type="text" name="QQ" id="QQ" placeholder="QQ" v-model="goodsMsg.QQ">
                </div>
            </div>
            <div class="form-group">
                <label for="wechat">微信</label>
        
                <div>
                    <input type="text" name="wechat" id="wechat" placeholder="微信" v-model="goodsMsg.wechat">
                </div>
            </div>
            <div class="box-footer">
                <button type="button" @click="handelPub">确认发布</button>
            </div>
        </div>
    </form>

</template>

<script>
    export default {
        name: 'publish',
        data: () =>{
            return {
                next: true,
                goodsMsg: {
                        pic: [],
                        title: '',
                        price: '',
                        msg: '',
                        type: '',
                        school: '',
                        place: '',
                        phone: '',
                        QQ: '',
                        wechat: ''
                    }
            }
        },
        methods: {
            handelPic(){
                var file = document.getElementById("photo").files;
                for (const item of file) {
                    if (window.FileReader) {    
                        var reader = new FileReader();    
                        reader.readAsDataURL(item);    
                        //监听文件读取结束后事件    
                        reader.onloadend = function (e) {
                            this.goodsMsg.pic.push(e.target.result)   //e.target.result就是最后的路径地址
                        }.bind(this)
                    } 
                }

            },
            handelDelPic(index){
                this.goodsMsg.pic.splice(index, 1)
            },
            handelNext(){
                if(!this.goodsMsg.pic.length){
                    alert('至少选择一张图片！')
                    return
                }else if( !this.goodsMsg.title || !this.goodsMsg.price || !this.goodsMsg.msg ){
                    alert('请填完整信息再走！')
                    return
                }
                else this.next = false
            },
            handelPub(){
                if( 
                    !this.goodsMsg.type || 
                    !this.goodsMsg.school || 
                    !this.goodsMsg.place || 
                    !this.goodsMsg.phone || 
                    !this.goodsMsg.QQ || 
                    !this.goodsMsg.wechat ){
                        alert('请填完整信息再走！')
                        return
                    }else alert('商品发布成功，即将跳转到详情页')
            },
            handelBack(){
                history.back()
            }

        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/usage/core/reset.scss';
    form{
        height: 100%;
        background: #f0f0f0;
        .next-group{
            .form-group{
                height: .6rem;
                margin: 0 .2rem;
                label{
                   margin: 0.1rem 0 .05rem 0; 
                }
            }
            .form-group:first-child{
                text-align: center;
            }
        }
        .form-group{
            height: .9rem;
            text-align: center;
            margin: 0 .2rem;
            @include border(0 0 1px 0);
            .picGroup{
                display: inline-block;
                position: relative;
                top: -.56rem;
                a{
                    width: .8rem;
                    height: .8rem;
                    display: inline-block;
                    position: relative;
                    margin-right: .1rem;
                    span{
                        position: absolute;
                        bottom: 0;
                        right: 0;
                        text-align: center;
                        color: #fff;
                        background: red;
                    }
                }
            }
            .img{
                width: .8rem;
                height: .8rem;
            }
            label{
                color: rgb(170,170,170);
                font-size: 14px;
                margin: .3rem 0 .05rem 0;
                display: inline-block;
            }
            input{
                background: none;
                border: none;
                text-align: center;
                font-size: 12px;
                width: 100%;
            }
            input[type='file']{
                visibility: hidden;
            }
            .photo{
                width: .8rem;
                height: .8rem;
                background: #ddd;
                position: relative;
                top: -.3rem;
                left: 0;
                line-height: 1.4rem;
                text-align: center;
                display: inline-block;
                i{
                    position: absolute;
                    top: 0;
                    left: 0.1rem;
                    font-size: 1rem;
                    line-height: .5rem;
                    height: .5rem;
                }
            }
        }
        .form-group:first-child{
            text-align: left;
        }
        .box-body{
            margin-top: .2rem;
        }
        button[type='button']{
            height: .30rem;
            width: 1.8rem;
            border-radius: .2rem;
            background-color: rgb(190,190,190);
            color: #fff;
            text-align: center;
            line-height: .3rem;
            margin-left: 50%;
            transform: translate(-50%);
            margin-top: .2rem;
        }
    }
    .title{
        height: .45rem;
        position: relative;
        text-align: center;
        line-height: .45rem;
        background: #e1e1e1;
        font-size: 15px;
        color: #666;
        i{
            position: absolute;
            line-height: .45rem;
            top: 0;
            left: .05rem;
            font-size: 22px;
        }
    }
</style>