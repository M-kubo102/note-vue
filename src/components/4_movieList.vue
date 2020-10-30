<template>
    <div class="movieList">
        <h3 :style="{fontSize : listFontSize+.5 + 'rem'}">{{title}}</h3>
        <p :style="{fontSize : listFontSize + 'rem'}">{{text}}</p>

        <button @click="changeFont">文字を大きくする</button>
    </div>
</template>

<script>
export default {
    props:['title', 'text', 'index'],
    data(){
        return{
            listFontSize: 1
        }
    },
    methods:{
        changeFont(){
            this.listFontSize += .1;
        }
    }
}
</script>

<style>
    .movieList{
        border: 2px solid #bbb;
        width: 500px;
        text-align: start;
        padding: 10px;
        margin: 0 auto;
    }

    .movieList button{
        background: #d2e5ee;
        border: 2px solid #2b5686;
        color: #2b5686;
        cursor: pointer;
    }

    .movieList button:focus{
        outline: none;
    }

    .movieList button:active{
        background: #aaccdb;
    }
</style>