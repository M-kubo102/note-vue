<template>
    <div>
        <h1>履修科目確認</h1>
        <button @click="isShow">履修確認画面に進む</button>
        <input type="number" placeholder="学籍番号を入力してください" v-model="number" v-show="isActive" class="inputStuNum">
        <p v-show="isActive">登録されている学籍番号：1111</p>

        <ul class="learnList" v-if="number == 1111">
            <li v-for="(sub,index) in subjects" :key="index">{{index+1}}.{{sub.subject}}: {{sub.time}}　{{sub.teacher}}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'basic4',
    data(){
        return{
            number: '',
            subjects:[
                {subject:'国語', time:'月曜3限', teacher:'鈴木先生'},
                {subject:'数学', time:'木曜1限', teacher:'田中先生'},
                {subject:'歴史', time:'火曜2限', teacher:'佐藤先生'},
                {subject:'科学', time:'金曜5限', teacher:'斎藤先生'},
                {subject:'音楽', time:'水曜4限', teacher:'伊藤先生'},
            ],
            isActive: false
        }
    },
    methods:{
        isShow(){
            this.isActive = !this.isActive;
        }
    }
    
}
</script>

<style>
    .inputStuNum{
        width: 190px;
    }

    .learnList{
        list-style: none;
        padding: 0;
        text-align: start;
        background: #d2e5ee;
        width: 200px;
        color: #2b5686;
        border: 2px dashed #9ab5c2;
        padding: 10px;
        margin: 20px auto;
    }
</style>