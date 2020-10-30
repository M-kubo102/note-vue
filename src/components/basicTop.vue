<template>
    <div>
        <h1>基礎編</h1>

        <ul class="noteMenu">
            <li><router-link to="/basic1">1-1</router-link></li>
            <li><router-link to="/basic2">1-2</router-link></li>
            <li><router-link to="/basic3">1-3</router-link></li>
            <li><router-link to="/basic4">1-4</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'basicTop'
}
</script>

<style>
    .noteMenu{
        list-style: none;
        padding: 0;
    }

    .noteMenu > li{
        background: #d2e5ee;
        width: 50px;
        height: 30px;
        line-height: 30px;
        margin: 10px auto;
        padding: 5px;
        border: 2px solid #2b5686;
        border-radius: 10px;
    }

    .noteMenu > li >a{
        color: #2b5686;
        font-size: 18px;
    }

    .noteMenu > li:hover{
        opacity: .8;
    }

</style>