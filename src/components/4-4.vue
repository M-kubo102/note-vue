<template>
    <div>
        <transition name="supportView">
            <messageBox v-show="isActive"></messageBox>
        </transition>
        <div class="supBtn" @click="viewSupport">サポート</div>
    </div>
</template>

<script>
import messageBox from '../components/4_support'

export default {
    name: 'app4',
    components:{
        messageBox
    },
    data(){
        return{
            isActive:false
        }
    },
    methods:{
        viewSupport(){
            this.isActive = !this.isActive;
        }
    }
}
</script>

<style>
    .supBtn{
        background: #a3d8f1;
        width: 100px;
        height: 100px;
        line-height: 100px;
        margin: 20px;
        border-radius: 50%;
        font-weight: bold;
        position:absolute;
        right: 100px; 
        bottom: 50px;
        cursor: pointer;
        user-select: none;
    }

    .supBtn:hover{
        background: #2b5686;
        color: #a3d8f1;
    }

    .supportView-enter-active,
    .supportView-leave-active{
        transition: all .2s ease-in-out;
    }

    .supportView-enter, .supportView-leave-to{
        opacity: 0;
    }
</style>