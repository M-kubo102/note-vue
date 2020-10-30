<template>
    <div class="movieContainer">
        <h1>映画紹介</h1>
        
        <div v-for="(movie,index) in movies" :key="movie.id">
            <movieList :title="movie.title" :text="movie.text" :index="index"></movieList>
        </div>
    </div>
</template>

<script>
import movieList from '../components/4_movieList'

export default {
    name: 'app5',
    components:{
        movieList
    },
    data(){
        return{
            movies:[
                {title:'映画A', text:'映画紹介文', id:1},
                {title:'映画B', text:'映画紹介文', id:2},
                {title:'映画C', text:'映画紹介文', id:3},
                {title:'映画D', text:'映画紹介文', id:4},
            ],
        }
    }
}
</script>

<style>

</style>