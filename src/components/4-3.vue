<template>
    <div>
        <h1>歴史</h1>

        <div class="historyView">
            <ul class="tabArea">
                <li @click="viewEvent">出来事</li>
                <li @click="viewWord">用語</li>
            </ul>

            <contentTab v-show="isEvent"></contentTab>
            <wordTab v-show="isWord"></wordTab>

        </div>
    </div>
</template>

<script>
import contentTab from '../components/4_histEvent'
import wordTab from '../components/4_histWord'

export default {
    name:'app3',
    components: {
        contentTab,
        wordTab
    },
    data(){
        return{
            isEvent: true,
            isWord: false
        }
    },
    methods:{
        viewEvent(){
            this.isEvent = true;
            this.isWord = false;
        },
        viewWord(){
            this.isEvent = false;
            this.isWord = true;
        }
    }
}
</script>

<style>
    .historyView{
        width: 800px;
        margin: 10px auto;
    }

    .tabArea{
        list-style: none;
        padding: 0;
        display: flex;
        margin: 0;
    }

    .tabArea li{
        background: #e4e4e4;
        width: 50px;
        padding: 10px;
        border: 2px solid #bbb;
        border-bottom: none;
        border-radius: 10px 10px 0 0;
        cursor: pointer;
    }

    .tabArea li:nth-child(2){
        border-left: 2px solid #bbb;;
    }
</style>