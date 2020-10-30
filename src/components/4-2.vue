<template>
    <div>
        <h1>書籍一覧</h1>
        <bookList v-for="book in books" :key="book" :title="book.title" :author="book.author" :likes="book.likes"></bookList>
    </div>
</template>

<script>
import bookList from '../components/4_book'

export default {
    name: 'app2',
    components:{
        bookList
    },
    data(){
        return{
            books:[
                {title: '日本史の本', author: '歴史太郎', likes: 5},
                {title: 'レシピの本', author: '料理次郎', likes: 8},
                {title: 'DIYの本', author: '手作り花子', likes: 4},
                {title: '感動物語の本', author: '感動良子', likes: 9},
            ]
        }
    }
}
</script>

<style>
    .bookList{
        border: 2px solid #2b5686;
        border-collapse: collapse;
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