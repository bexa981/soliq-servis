<script setup>
import { ref } from 'vue';

const editorContent = ref('');
</script>

<template>
    <div class="newsPanel">
        <div class="lang-panel">
            <a href="">O'ZBEKCHA</a>
            <a href="">РУССКИЙ</a>
            <a href="">ENGLISH</a>
        </div>

        <form @submit.prevent="submitForm">
            <div class="name-input">
                <label for="name">Nomi</label>
                <input type="text" id="name">
            </div>
            <div class="photo-input">
                <label for="photo">Rasmi</label>
                <div class="photo-main">
                    <div class="photo_url">

                       
                    </div>

                    <button>Rasm tanlash</button>

                </div>
            </div>
            <div class="info-main">
                <label for="matn">Matni</label>
                <div>

                    <QuillEditor v-model="editorContent"  id="matn" theme="snow" />
                </div>
            </div>
         
        </form>
    </div>
</template>

<style scoped>
.newsPanel {
    background-color: white;
    margin: 20px;
    border-radius: 10px;
    box-shadow: 2px 2px 10px rgb(187, 187, 187);
    padding: 20px;
}

.lang-panel {
    display: flex;
    gap: 20px;
    padding: 20px;
    margin-left: 40px;
}

.name-input {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 100px;
    margin-left: 20px;

}

.name-input input {
    padding: 10px;
    width: 390px;
    font-size: 18px;
    border-radius: 10px;
    border: 1px solid gray;
    height: 50px;
}

.name-input label {
    font-size: 18px;
    font-weight: 600;
    color: rgb(60, 59, 59);
}

.photo-input {
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 95px;
    margin-left: 20px;
}

.photo-input label {
    font-size: 18px;
    font-weight: 600;
    color: rgb(60, 59, 59);
}



.photo-input button {
    width: 100px;
    height: 50px;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    padding: 10px;
    font-size: 16px;
    font-weight: 600;
    border-radius: 10px;
    cursor: pointer;
    color: rgb(48, 48, 233);
    border: 1px solid;
    background-color: #fff;
}

.photo-main {
    display: flex;

}
.photo_url{
    width: 280px;
    height: 50px;
    border: 1px solid gray;
    border-radius: 10px;
    font-size: 18px;
    margin-right: 10px;
}
.info-main{
    padding: 10px;
    display: flex;
    align-items: center;
    gap: 100px;
    margin-left: 20px;
}
.info-main label{
    font-size: 18px;
    font-weight: 600;
    color: rgb(60, 59, 59);
}
.ql-editor{
    height: 400px!important;
}
.ql-container {
  border: 1px solid #ccc;
  height: 500px; /* Adjust the height as needed */
}

.ql-editor {
  /* Styles for the editor content area */
  font-size: 18px; /* Adjust the font size as needed */
  color: red;
}
</style>