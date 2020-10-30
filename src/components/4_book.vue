<template>
    <p>{{title}} {{author}} {{likes}}</p>

</template>

<script>
export default {
    props: {
        title:String,
        likes:Number,
        author:String
    }
}
</script>

<style>
    .bookList{
        border: 2px solid #2b5686;
        /* border-collapse: collapse; */
        margin: 10px auto;
    }

    .bookList th,
    .bookList td{
        border: 1px solid #2b5686;
        padding: 10px;
    }

    .bookList th{
        background: #d2e5ee;
    }

</style>