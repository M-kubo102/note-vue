<template>
    <div class="wdViewArea">
        <div class="indexArea">
            <ul class="wordList" v-for="(word, index) in wordList" :key="index">
                <li @click="viewWord(index)">{{word.item}}</li>
            </ul>
        </div>

        <div class="discArea">
            <h3 v-show="isWordShow">{{selectedItem}}</h3>
            <p v-show="isWordShow">{{selectedText}}</p>
            <p v-show="!isWordShow">単語を選択すると詳細を表示します。</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            wordList:[
                {item: '徳川家康', text: '徳川幕府初代将軍。岡崎城主松平広忠の長男。秀吉の死後、関ヶ原の戦で石田三成を破り対抗勢力の一掃に成功、征夷大将軍となる。大坂冬・夏の陣で豊臣氏を滅ぼし、名実共に天下を統一して幕府の基礎を固めた。元和2年(1616)歿、75才。'},
                {item: '江戸城', text: '東京都千代田区丸の内の皇居にあたり，平城。徳川氏の居城で，江戸幕府の所在地。平安時代末から鎌倉時代にかけては，平良文の孫秩父将常の子孫江戸氏の居館であった。'},
            ],
            selectedItem: '',
            selectedText: '',
            isWordShow: false
        }
    },
    methods:{
        viewWord(index){
            this.isWordShow = true;
            this.selectedItem = this.wordList[index].item;
            this.selectedText = this.wordList[index].text;
        }
    }
}
</script>

<style>
    .wdViewArea{
        border: 2px solid #bbb;
        text-align: start;
        padding: 0 10px;
        display: flex;
        height: 200px;
    }

    .indexArea{
        width: 200px;
        border-right: 2px dashed #bbb;
    }

    .wordList{
        list-style: none;
        padding: 0;
    }

    .wordList li{
        cursor: pointer;
        border-bottom: 1px dashed #bbb;
        width: 100px;
    }

    .discArea{
        width: 600px;
        padding: 0 10px;
    }
</style>