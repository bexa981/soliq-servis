<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HeaderVue from './components/Header.vue'
import HomeIcon from './components/icons/HomeIcon.vue';
import InstructionsIcon from './components/icons/InstructionsIcon.vue';
import NewsIcon from './components/icons/NewsIcon.vue';
import QuestionsIcon from './components/icons/QuestionIcon.vue';
import VideoIcon from './components/icons/VideoIcon.vue';
</script>

<template>
  


  <header>

    <div class="logo">
    
      <img alt="Vue logo" class="logo" src="https://taxfree.soliq.uz/static/logo-2409219068c01a4a1b3b30965c7d96d6.svg" width="125" height="125" />
    </div>

    <div class="wrapper">
     

      <nav>
        <RouterLink to="/"><HomeIcon class="icon"/> Bosh sahifa</RouterLink>
        <RouterLink to="/video"><VideoIcon class="icon"/>Video</RouterLink>
        <RouterLink to="/news"><NewsIcon class="icon"/>Yangiliklar</RouterLink>
        <RouterLink to="/materials"><InstructionsIcon class="icon"/> Qo'llanma file</RouterLink>
        <RouterLink to="/questions"><QuestionsIcon class="icon"/>Savollar</RouterLink>
        
        
      </nav>
    </div>
  </header>
  <div>
    <HeaderVue/>

  
    <RouterView />
  </div>
  
</template>

<style scoped>
header {
  width: 350px;
 
  height: 100%;
  padding-left: 15%;
  padding-top: 50px;
  padding-bottom: 50px;
  display: flex;
  background-color: white;
  flex-direction: column;
  box-shadow: 1px 1px 5px rgb(205, 204, 204);
  border-right: 1px solid var(--color-border);
  
}

.icon{
  width: 22px;
  height: 22px;
}
.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  text-align: center;
  margin-top: 2rem;
  padding-left: 20%;
}

nav a.router-link-exact-active {
  color: rgba(8, 8, 115, 0.996);
  background-color: whitesmoke;
  border-radius: 15px;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
 
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 17px 1rem;
  font-size: 16px;
  font-weight: 600;

}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;

    
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
