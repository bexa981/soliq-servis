<script setup>
    import YangilikCreate from '@/components/Yangiliklar/YangilikCreate.vue';
    import YangilikEdit from '@/components/Yangiliklar/YangilikEdit.vue';
</script>
<template>

          <YangilikCreate v-if="!$route.params.id"/>
       
          <YangilikEdit v-if="!!$route.params.id"/>
 
</template>


<style scoped>
.create{
    background-color: gray;
}
</style>
