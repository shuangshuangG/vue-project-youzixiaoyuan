<template>
    <div class="school">
        <div class="schoolHead">
            <i class="fa fa-angle-left" @click="back"></i>
            <span>选择学校</span>
        </div>
        <search router="school"></search>
        <ul>
            <mt-index-list>
                <mt-index-section v-for="(item, index) of list" :key="index" :index="item.index">
                    <mt-cell v-for="(schoolName, index) of item.title" :title="schoolName.name" :key="index">
                        <i class="fa fa-map-marker"></i>
                    </mt-cell>
                </mt-index-section>
            </mt-index-list>
        </ul>
    </div>
</template>

<script>
    import Bus from '../bus.js'
    import search from '../components/search.vue'
    export default {
        name: 'school',
        components: {
            search
        },
        beforeRouteEnter (to, from, next) {
            Bus.$emit('isShow',false)
            next()
        },
        beforeRouteLeave (to, from, next) {
            Bus.$emit('isShow',true)
            next()
        },
        data: () =>{
            return {
                list: [
                    {
                        index: '热门学校',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            },
                            {
                                name: '广西理工职业技术学院'
                            },
                            {
                                name: '陕西工业职业技术学院                '
                            },
                            {
                                name: '华东交通大学                '
                            },
                            {
                                name: '华侨大学                '
                            },
                            {
                                name: '南华大学                '
                            },
                            {
                                name: '广东岭南职业技术学院                '
                            }
                        ]
                    },
                    {
                        index: 'A',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            },
                            {
                                name: '广西理工职业技术学院'
                            }
                        ]
                    },
                    {
                        index: 'B',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            },
                            {
                                name: '广西理工职业技术学院'
                            }
                        ]
                    },
                    {
                        index: 'C',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            },
                            {
                                name: '广西理工职业技术学院'
                            }
                        ]
                    },
                    {
                        index: 'D',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            },
                            {
                                name: '广西理工职业技术学院'
                            }
                        ]
                    },
                    {
                        index: 'E',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'F',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'G',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'H',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'I',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'J',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'K',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'L',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'M',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                    {
                        index: 'N',
                        title: [
                            {
                                name: '桂林电子科技大学'
                            },
                            {
                                name: '桂林理工大学'
                            }
                        ]
                    },
                ]
            }
        },
        methods: {
            back(){
                history.back()
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../style/usage/core/reset.scss';
    .school{
        height: 100%;
    }
    .schoolHead{
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
    ul{
        position: absolute;
        top: 1.1rem;
        bottom: 0;
        width: 100%;
        overflow-y: scroll;
        background: #fff;
    }
    li{
        font-size: 15px;
        color: #666;
        list-style: none;
        background: #fff;
        padding: .12rem .15rem;
        @include border(1px 0 0 0);
        i{
            margin-right: .1rem;
        }
    }
    li:nth-of-type(1){
        i{
            color: blue;
        }
    }
    /deep/ .mint-cell-title{
        position: absolute;
        left: .6rem;
    }
</style>