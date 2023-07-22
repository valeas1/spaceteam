<template>

        <router-view></router-view>

</template>
  
<script setup lang="ts">
    import Header from './components/Header.vue'


</script>
  
  <style>
  @font-face {
    font-display: swap; 
    font-family: 'Barlow Condensed';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/barlow-condensed.woff2') format('woff2');
  }
  @font-face {
  font-display: swap;
  font-family: 'Barlow Condensed';
  font-style: normal;
  font-weight: 700;
  src: url('./fonts/barlow-condensed-700.woff2') format('woff2');
  }
  @font-face {
    font-display: swap; 
    font-family: 'Bellefair';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/bellefair.woff2') format('woff2');
  }
  @font-face {
    font-display: swap;
    font-family: 'Barlow';
    font-style: normal;
    font-weight: 400;
    src: url('./fonts/barlow.woff2') format('woff2');
  }
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }
  
  body {
      font-family: 'Barlow Condensed';
      font-weight: 400;
      background-color: #0b0d17;
  }
  </style>
