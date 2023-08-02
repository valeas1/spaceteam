<template>
    <div class="wrapper">
        <Header></Header>
        <TechnogyBlock></TechnogyBlock>
    </div>

</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import TechnogyBlock from '@/components/TechnogyBlock.vue';

</script>

<style scoped>
    .wrapper {
        position: relative;
        overflow-x: hidden;
        background-image: url('../assets/technology/background-technology-desktop.jpeg');
        background-size: cover;
        background-position: left;
        height: 100vh;
    }
</style>