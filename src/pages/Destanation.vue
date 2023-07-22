<template>
    <div class="wrapper">
        <Header></Header>
        <DestinationsBlock></DestinationsBlock>
    </div>

</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import DestinationsBlock from '@/components/DestinationsBlock.vue';


</script>

<style scoped>
.wrapper {
    background-image: url('../assets/destination/background-destination-desktop.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
}

</style>