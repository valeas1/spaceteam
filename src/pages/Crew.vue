<template>
    <div class="wrapper">
        <Header></Header>
        <CrewBlock></CrewBlock>
    </div>

</template>

<script setup lang="ts">
import Header from '@/components/Header.vue';
import CrewBlock from '@/components/CrewBlock.vue';

</script>

<style scoped>
.wrapper {
    background-image: url('../assets/crew/background-crew-desktop.jpg');
    background-size: cover;
    background-position: center;
    width: 100%;
    height: 100vh;
}

</style>