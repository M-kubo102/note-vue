<template>
    <div>
        <h1>CRUD編</h1>

        <ul class="noteMenu">
            <li><router-link to="/crud1">2-1～2-3</router-link></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'crudTop'
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