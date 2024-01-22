<script setup>
    import SavollarCreate from '@/components/Savollar/SavollarCreate.vue';
   import SavollarEdit from '@/components/Savollar/SavollarEdit.vue';
</script>
<template>

          <SavollarCreate v-if="!$route.params.id"/>
       
          <SavollarEdit v-if="!!$route.params.id"/>
 
</template>


<style scoped>
.create{
    background-color: gray;
}
</style>
