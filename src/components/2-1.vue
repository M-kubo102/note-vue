<template>
    <div>
        <h1>生徒名簿</h1>

        <section class="inputStudArea">
            <label for="name">氏名</label>
            <input type="text" v-model="newName" id="name">
            <br>

            <label for="age">年齢</label>
            <input type="number" v-model="newAge" id="age">
            <br>

            <label for="gender">性別</label>
            <select v-model="newGender" id="gender">
                <option value="女性">女性</option>
                <option value="男性">男性</option>
                <option value="その他">その他</option>
            </select>
            <br>

            <button @click="submitData" v-show="!isEditMode">追加</button>
            <button @click="updateData" v-show="isEditMode">更新</button>
        </section>

        <div id="borderLine"></div>

        <ul class="studentView">
            <li v-for="(student, index) in students" :key="index">
                <p>氏名：{{student.name}}</p>
                <p>年齢：{{student.age}}</p>
                <p>性別：{{student.gender}}</p>
                
                <span>
                    <button @click="editData(index)">編集</button>
                    <button @click="deleteData(student.name, index)">削除</button>
                </span>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'crud1',
    data(){
        return{
            students:[
                {name: '佐藤', age:'19', gender: '女性'},
                {name: '田中', age:'21', gender: '女性'},
                {name: '斎藤', age:'22', gender: '男性'},
                {name: '鈴木', age:'20', gender: '男性'},
                {name: '伊藤', age:'18', gender: '女性'},
            ],
            newName: '',
            newAge: '',
            newGender: '',
            selectedDataNum: null,
            isEditMode: false
        }
    },
    methods:{
        resetData(){
            this.newName = '';
            this.newAge = '';
            this.newGender = '';
        },
        submitData(){
            this.students.push({name: this.newName, age: this.newAge, gender: this.newGender});
            this.resetData();
        },
        deleteData(student, index){
            if(confirm(`生徒「${student}」を名簿から削除します。`)){
                this.students.splice(index, 1);
            }
        },
        editData(index){
            this.isEditMode = true;

            this.selectedDataNum = index;
            this.newName = this.students[index].name;
            this.newAge = this.students[index].age;
            this.newGender = this.students[index].gender;
        },
        updateData(){
            this.$set(this.students, this.selectedDataNum, {name: this.newName, age: this.newAge, gender: this.newGender});
            this.resetData();
            this.isEditMode = false;
        }
    }
}
</script>

<style>
    .inputStudArea{
        border: 1px solid #9ab5c2;
        text-align: start;
        width: 200px;
        margin: 10px auto;
        padding: 10px;
    }

    .inputStudArea > input,
    .inputStudArea > select{
        margin-bottom: 20px;
    }

    .studentView{
        list-style: none;
        text-align: start;
        padding: 0;
    }

    .studentView>li{
        border: 1px solid #9ab5c2;
        width: 200px;
        margin: 10px auto;
        padding: 10px;
    }

    #borderLine{
        border: 2px dashed #d2e5ee;
        width: 1200px;
        margin: 0 auto;
    }
</style>