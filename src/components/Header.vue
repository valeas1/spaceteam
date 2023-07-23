<template>
    <header class="header">
        <img class="header__logo" src='../assets/shared/logo.svg' alt="logo">
        <img class="header__hamburger" @click="toggleShowHandler" src="../assets/shared/icon-hamburger.svg" alt="hamburger">
        <Transition name="slide-fade">
            <Navbar v-if="(screenWidth >= 768)? true : isShow" @closeNavbar="toggleShowHandler"></Navbar>
        </Transition>
    </header>
</template>



<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue';
import Navbar from './Navbar.vue'

const isShow = ref(false)

const screenWidth = ref(window.innerWidth)

const toggleShowHandler = () => {  
    isShow.value = !isShow.value;
}

const onSizeCheckHandler = () => {
  screenWidth.value = window.innerWidth;
}

onMounted(()=> {
  window.addEventListener('resize', onSizeCheckHandler)
})

onBeforeUnmount(()=> {
  window.removeEventListener('resize', onSizeCheckHandler)
})

</script>

<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 24px 24px 0 24px;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (min-width: 768px) {
  .header {
    padding: 0;
  }
  .header__hamburger {
    display: none;
  }
  .header__logo {
  margin-left: 24px;
}
}

@media screen and (min-width: 1200px) {
  .header {
    padding-top: 40px;
  }
}
</style>