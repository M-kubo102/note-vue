<template>
    <div>

        <p>{{counter}}</p>
        <input type="number" v-model="counter">

    </div>
</template>

<script>
export default {
    data(){
        return{
            counter: 0
        }
    },
    methods:{

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