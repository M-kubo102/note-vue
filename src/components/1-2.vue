<template>
    <div>
        <h1>自己紹介</h1>

        <section class="profInpArea">
            <input type="text" v-model="name">
            <input type="text" v-model="age">
            <select v-model="gender">
                <option value="女性">女性</option>
                <option value="男性">男性</option>
                <option value="その他">その他</option>
            </select>
            <br>
            <textarea v-model="profile"></textarea>
        </section>

        <section class="profViewArea" :class="{textcontent : isActive}" :style="{color: activeColor}">
            <p>私の名前は{{name}}です。</p>
            <p>年齢は{{age}}です。</p>
            <p>性別は{{gender}}です。</p>
            <p>一言：{{profile}}</p>
        </section>

        <button @click="isChange">文字サイズを変更</button>
        <select v-model="activeColor">
            <option value="black">黒</option>
            <option value="red">赤</option>
            <option value="green">緑</option>
            <option value="blue">青</option>
        </select>
    </div>
</template>

<script>
export default {
    name: 'basic2',
    data(){
        return{
            name: '田中花子',
            age: '20',
            gender: '女性',
            profile: 'よろしくお願いします！',
            isActive: false,
            activeColor: ''
        }
    },
    methods:{
        isChange(){
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style>
    .profInpArea{
        margin: 10px;
    }

    .profInpArea>textarea{
        resize: none;
        width: 408px;
    }

    .profViewArea{
        background: #d2e5ee;
        width: 300px;
        text-align: left;
        margin: 10px auto;
        padding: 10px;
        font-size: 16px;
    }

    .textcontent{
        font-size: 20px;
    }

</style>