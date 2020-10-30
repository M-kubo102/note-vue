<template>
    <div>
        <h1>応用編</h1>

        <ul class="noteMenu">
            <li><router-link to="/app1">4-1</router-link></li>
            <li><router-link to="/app2">4-2</router-link></li>
            <li><router-link to="/app3">4-3</router-link></li>
            <li><router-link to="/app4">4-4</router-link></li>
            <li><router-link to="/app5">4-5</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'jsAppTop'
}
</script>

<style>
    .noteMenu{
        list-style: none;
        padding: 0;
    }

    .noteMenu > li{
        background: #d2e5ee;
        width: 80px;
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