<template>
    <div>
        <h1>十二支一覧</h1>
        <ul class="etoView">
            <li v-for="(eto, index) in etoList" :key="index">{{index+1}}：{{eto.item}}  …{{eto.animal}}</li>
        </ul>
    </div>    
</template>

<script>
export default {
    name: 'basic3',
    data(){
        return{
            etoList:[
                {item:'子', animal:'ネズミ'},
                {item:'丑', animal:'ウシ'},
                {item:'寅', animal:'トラ'},
                {item:'卯', animal:'ウサギ'},
                {item:'辰', animal:'ドラゴン'},
                {item:'巳', animal:'ヘビ'},
                {item:'午', animal:'ウマ'},
                {item:'未', animal:'ヒツジ'},
                {item:'申', animal:'サル'},
                {item:'酉', animal:'ニワトリ'},
                {item:'戌', animal:'イヌ'},
                {item:'亥', animal:'イノシシ'},
            ]
        }
    }
}
</script>

<style>
    .etoView{
        list-style: none;
        padding: 0;
        text-align: start;
        background: #d2e5ee;
        width: 200px;
        color: #2b5686;
        border: 2px dashed #9ab5c2;
        padding: 10px;
        margin: 0 auto;
    }
</style>