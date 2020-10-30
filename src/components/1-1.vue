<template>
    <div>
        <h1>カウンター</h1>

        <button @click="greeting">挨拶</button>
        <button @click="increment">カウントアップ</button>
        <button @click="decrement">カウントダウン</button>

        <p>{{count}}</p>
    </div>
</template>

<script>
export default {
    name: 'basic1',
    data(){
        return{
            count: 0
        }
    },
    methods:{
        increment(){
            this.count++;
        },
        decrement(){
            this.count--;
        },
        greeting(){
            confirm('こんにちは!');
        }
    }
}
</script>

<style>

</style>