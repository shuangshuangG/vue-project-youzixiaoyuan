<template>
    <div :class="'type '+classname">
        <ul>
            <li v-for="(item,index) in list" :key="index">
                <i :class="item.icon"></i>
                <span>{{item.html}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    import Bus from '../bus.js'
    export default {
        name: 'type',
        data() {
            return {
                classname: '',
                list: [
                    {
                        icon: 'fa fa-arrows-alt',
                        html: '所有分类'
                    },
                    {
                        icon: 'fa fa-bicycle',
                        html: '代步工具'
                    },
                    {
                        icon: 'fa fa-mobile',
                        html: '手机'
                    },
                    {
                        icon: 'fa fa-tv',
                        html: '电脑'
                    },
                    {
                        icon: 'fa fa-camera',
                        html: '数码'
                    },
                    {
                        icon: 'fa fa-chain-broken',
                        html: '电器'
                    },
                    {
                        icon: 'fa fa-female',
                        html: '衣帽鞋伞'
                    },
                    {
                        icon: 'fa fa-book',
                        html: '书籍教材'
                    },
                    {
                        icon: 'fa fa-support',
                        html: '体育健身'
                    },
                    {
                        icon: 'fa fa-music',
                        html: '乐器'
                    },
                    {
                        icon: 'fa fa-pencil',
                        html: '自行设计'
                    },
                    {
                        icon: 'fa fa-ellipsis-h',
                        html: '其他'
                    }
                ]
            }
        },
        mounted() {
            Bus.$on('isSlide',res =>{
                if(res) this.classname = 'slideLeft'
                else this.classname = 'slideRight'
            })
        },
    }
</script>

<style lang="scss" scoped>
    .type{
        width: 50%;
        height: 100%;
        background: #333;
        color: #fff;
        position: absolute;
        top: 0;
        left: -50%;
        z-index: 5;
    }
    .slideLeft{
        transform: translateX(100%);
        transition: .2s all linear;
    }
    .slideRight{
        transform: translateX(0%);
        transition: .2s all linear;
    }
    ul{
        margin-top: .3rem;
        li{
            height: .41rem;
            line-height: .41rem;
            font-size: 16px;
            color: #ccc;
            i{
                margin: 0 .2rem;
                display: inline-block;
                width: .2rem;
            }
        }
    }
</style>