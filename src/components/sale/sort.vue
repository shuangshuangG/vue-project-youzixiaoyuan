<template>
    <div class="sort">
        <div v-for="(item, index) of sortItem" :key="index" @click="choseSort(index)" :class="item.css">
            <span>{{item.name}}</span>
            <i :class="item.icon"></i>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'sort',
        data() {
            return {
                sortItem: [
                    {
                        name: '随机',
                        icon: 'fa fa-arrows',
                        css: ''
                    },
                    {
                        name: '时间',
                        icon: 'fa fa-long-arrow-down',
                        css: 'active'
                    },
                    {
                        name: '价格',
                        icon: 'fa fa-arrows',
                        css: ''
                    },
                    {
                        name: '热度',
                        icon: 'fa fa-arrows',
                        css: ''
                    }
                ],
                flag: true
            }
        },
        methods: {
            choseSort(index){
                for( var i=0; i<this.sortItem.length ;i++ ){
                    this.sortItem[i].icon = 'fa fa-arrows'
                    this.sortItem[i].css = ''
                }
                if(this.flag){
                    this.sortItem[index].icon = 'fa fa-long-arrow-down'
                    this.flag = false
                    this.sortItem[index].css = 'active'
                }
                else{
                    this.sortItem[index].icon = 'fa fa-long-arrow-up'
                    this.flag = true
                    this.sortItem[index].css = 'active'
                }
                this.sortItem[0].icon = 'fa fa-arrows'
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import '../../style/usage/core/reset.scss';
    .sort{
        @include flexbox();
        position: relative;
        margin-top: .1rem;
        background: #fff;
        height: .4rem;
        >div{
            @include flex();
            @include align();
            span{
                margin-right: .05rem;
            }
        }
        .active{
            color: #3ac0b5;
        }
    }

</style>