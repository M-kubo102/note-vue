<template>
    <div>

        <button @click="increment" class="cntBtn">{{count}}</button>
        <button @click="resetCnt" class="cntBtn">リセット</button>

    </div>
</template>

<script>
export default {
    data(){
        return{
            count: 0
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        resetCnt(){
            this.count =0;
        }
    }
}
</script>

<style>
    .cntBtn{
        width: 80px;
        height: 30px;
        font-size: 14px;
        background: #d2e5ee;
        border: 2px solid #2b5686;
        cursor: pointer;
        color: #2b5686;
    }

    .cntBtn:focus{
        outline: none;
    }

</style>