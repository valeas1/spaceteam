<template>
    <div class="wrapper">
        <Header></Header>
        <MainBlock></MainBlock>
    </div>
</template>

  
<script setup lang="ts">
import Header from '../components/Header.vue'
import MainBlock from '../components/MainBlock.vue'

</script>

<style scoped>
  .wrapper {
      position: relative;
      width: 100%;
      height: 100vh;
      background-image: url('../assets/home/background-bottom.png'), url('../assets/home/background-top.png');
      background-repeat: no-repeat, repeat;
      background-position: 0px 30vh;
      overflow-x: hidden;
  }
  @media screen and (min-width: 768px) {
    .wrapper {
      background-image: url('../assets/home/background-bottom-tablet.png'),  url('../assets/home/background-top.png');
      background-position: 0px 10vh;
    }
  }
  @media screen and (min-width: 1200px) {
    .wrapper {
      background-image: url('../assets/home/background-home-desktop.png'), url('../assets/home/background-top.png');
      background-position-x: 6vh;
      background-position-y: center;
    }
  }
</style>