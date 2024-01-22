<script setup>
import SavollarTable from '../../components/Savollar/SavollarTable.vue' 
</script>

<template>
    <div>
        <div class="top-questions">
            <h2>Savollar</h2>
        <div class="add-file">
            <a href="/questions/questcreate">Yaratish</a>
        </div>
        </div>
        <div class="table">
            <SavollarTable/>

        </div>
        
    </div>
</template>

<style scoped>
.top-questions{
    display: flex;
    justify-content: space-between;
    padding: 20px;
    margin: 20px;
    background-color: white;
    border-radius: 15px;
}
h2{
   
    
    font-weight: 500;
    font-size: 25px;
    color: rgba(8, 8, 115, 0.996);
}

.add-file a{
 padding: 10px 30px;
 font-size: 19px;
 font-weight: 600;
 color: white;
 background-color: rgb(48, 48, 233);
 border: none;
 box-shadow: 1px 1px 7px rgb(183, 180, 180);
 cursor: pointer;
 border-radius: 10px;
}
.table{
    background-color: white;
    padding: 20px;
    margin: 20px;
    border-radius: 15px;
}
</style>