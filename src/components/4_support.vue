<template>
    <div class="supportContainer">
        <div v-show="!isSubmit" class="supArea">
            <h3>お困りですか？</h3>
            <textarea placeholder="お気軽にご連絡ください。"></textarea>
            <button @click="submit">送信</button>
        </div>

        <p v-show="isSubmit">ありがとうございます！</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
            isSubmit: false
        }
    },
    methods:{
        submit(){
            this.isSubmit = true;
        }
    }
}
</script>

<style>
    .supportContainer{
        background: #65cfac;
        width: 200px;
        height: 300px;
        margin: 10px;
        right: 190px; 
        bottom: 130px;
        position:absolute;
        border-radius: 20px;
    }

    .supportContainer>p{
        font-weight: bold;
    }

    .supArea>h3{
        margin: 10px;
        padding: 0;
    }

    .supArea textarea{
        width: 160px;
        height: 200px;
        resize: none;
    }

    .supArea button{
        background: #d2e5ee;
        border: 2px solid #2b5686;
        color: #2b5686;
        font-size: 14px;
        font-weight: bold;
        cursor: pointer;
    }

    .supArea button:active{
        border: 1px solid #2b5686;
    }

    .supArea textarea:focus,
    .supArea button:focus{
        outline: none;
    }
</style>