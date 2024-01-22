<script setup>
import AccountIcon from './icons/AccountIcon.vue';
</script>

<template>
    <div class="header">
        <div class="account">
            <h3>Superadmin</h3>
            <a class="admin" href="#">
           <AccountIcon/>
            </a>
           
             
        </div>
    </div>
</template>

<style scoped>
 .header{
    width: 100%;
    height: 10vh;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: end;
    padding-right: 5%;
    box-shadow: 1px 1px 5px rgb(205, 204, 204);
 }
 .account{
    display: flex;
    justify-content: end;
    gap: 10px;
    align-items: center;

 }
 .admin{
    background-color: rgb(203, 202, 202);
    display: flex;
    justify-content: center;
    align-items: center;
    width: fit-content;
    border-radius: 50%;
    padding: 10px;
    
 }
 h3{
    color: green;
    font-weight: 600;
    font-size: 18px;
    text-transform: uppercase;
 }
</style>