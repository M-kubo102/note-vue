<template>
    <div>
        <h1>カウンター&インプット</h1>

        <btnCounter></btnCounter>
        <inputBox></inputBox>

    </div>
</template>

<script>
import btnCounter from '../components/4_button'
import inputBox from '../components/4_counter'

export default {
    name: 'app1',
    components:{
        btnCounter,
        inputBox
    },
    data(){
        return{
            
        }
    }
}
</script>

<style>

</style>