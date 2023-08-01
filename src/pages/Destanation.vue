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
    position: relative;
    overflow-x: hidden;
    background-image: url('../assets/destination/background-destination-desktop.jpg');
    background-size: cover;
    background-repeat: repeat-y;
    width: 100%;
}
@media screen and (min-width: 1200px) {
    .wrapper {
        height: 100vh;
    }
}

</style>