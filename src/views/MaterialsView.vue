<script setup>
 import QollanmaTable from '../components/Qollanma/QollanmaTable.vue'
</script>

<template>
    <div class="material-main">
        <div class="top-materials">
            <h2>Qo'llanma file</h2>
        <div class="add-file">
        <button >File qo'shish</button>
        </div>
        </div>
      
        <div>
            <div class="table">
                <QollanmaTable/>

            </div>
        
    </div>
    </div>
   
</template>

<style scoped>
.top-materials{
    display: flex;
    justify-content: space-between;
    background-color: white;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
}
h2{
   
    font-weight: 500;
    font-size: 25px;
    color: rgba(8, 8, 115, 0.996);
}

.add-file button{
 padding: 10px 30px;
 font-size: 19px;
 font-weight: 600;
 color: rgb(16, 176, 16);
 background-color: white;
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