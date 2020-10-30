<template>
    <header>
        <div class="logo">
            <h1>ノート</h1>
        </div>
        <div class="container">
            <ul class="menu">
                <li><router-link to="/" class="btn"><span class="btn-text">Top</span></router-link></li>
                <li><router-link to="/basic" class="btn"><span class="btn-text">基礎編</span></router-link></li>
                <li><router-link to="/crud" class="btn"><span class="btn-text">CRUD編</span></router-link></li>
                <li><router-link to="/app" class="btn"><span class="btn-text">応用編</span></router-link></li>
            </ul>
        </div>
    </header>
</template>

<script>

export default {
    
}
</script>

<style>
    header{
        width: 100%;
        height: 64px;
        background: #d2e5ee;
        display: flex;
    }

    .logo{
        line-height: 15px;
        margin: 0 24px;
        color: #2b5686;
        font-size: 18px;
    }

    .menu{
        list-style: none;
        margin: 0;
        padding: 0;
        display: flex;
        font-size: 18px;
    }

    a{
        display: block;  
        text-decoration: none;     
    }

    .btn{
        width: 100px;
        line-height: 64px;
        text-align: center;
        position: relative;
        display: flex;
    }

    .btn-text{
        width: 100%;
        height: 100%;
        color: #2b5686;
    }

    .btn-text:hover{
        background: #2b5686;
        color: #d2e5ee;
        transition: .2s;
    }

</style>