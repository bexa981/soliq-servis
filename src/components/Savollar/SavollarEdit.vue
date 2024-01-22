<script setup>
import CreateIcon from '../icons/CreateIcon.vue';
import BackIcon from '../icons/BackIcon.vue'
import SavollarForm from './SavollarForm.vue';
</script>

<template>
    <div class="panel-main">
        <div class="newsPanel-top">
            <button class="back-panel">
                <BackIcon />
            </button>

            <div class="btns">
                <button class="endTask">X Bekor qilish</button>
                <button class="createBtn">
                    <CreateIcon /> Yaratish
                </button>
            </div>
        </div>

       <SavollarForm/>
    </div>
</template>

<style scoped>
.newsPanel-top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 30px;
    background-color: white;
    border-top: 1px solid gray;
}

.back-panel {
    background-color: transparent;
    border: none;
    cursor: pointer;

}

.btns button {
    padding: 10px;
    font-weight: 600;
    font-size: 15px;
    cursor: pointer;
    margin: 5px;
    border-radius: 5px;
}

.btns {
    display: flex;
}

.endTask {
    color: rgb(221, 91, 91);

    border: 1px solid rgb(168, 167, 167);
    background-color: transparent;
    transition: .3s;
}

.endTask:hover {
    background-color: rgb(237, 235, 235);
}

.createBtn {
    background-color: rgb(48, 48, 233);
    color: white;
    border: none;

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    box-shadow: 0px 5px 10px rgb(102, 102, 237);
    transition: .3s;
}

.createBtn:hover {
    box-shadow: none;
}


</style>