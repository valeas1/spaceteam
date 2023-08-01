<template>
        <div class="navbar">
            <img class="navbar__btn" src="../assets/shared/icon-close.svg" alt="close" @click="toggleShowHandler">
            <nav class="navbar__navigation">
                <router-link active-class="navbar__navigation-link--active" class="navbar__navigation-link" to="/"><b class="navbar__navigation-link-strong">00</b> HOME</router-link>
                <router-link active-class="navbar__navigation-link--active" class="navbar__navigation-link" to="/destanation"><b class="navbar__navigation-link-strong">01</b> DESTINATION</router-link>
                <router-link active-class="navbar__navigation-link--active" class="navbar__navigation-link" to="/crew"><b class="navbar__navigation-link-strong">02</b> CREW</router-link>
                <router-link active-class="navbar__navigation-link--active" class="navbar__navigation-link" to="/technology"><b class="navbar__navigation-link-strong">03</b> TECHNOLOGY</router-link>
            </nav>
        </div>
</template>

<script setup lang="ts">

const emit = defineEmits(['closeNavbar']);

const toggleShowHandler = () => {
    emit('closeNavbar')
}

</script>

<style scoped>
.navbar {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: 0;
    top: 0;
    bottom: 0;
    width: 70%;
    height: 100%;
    padding: 32px 26px 0 32px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
    z-index: 1000;
}
.navbar-hid {
    position: absolute;
    display: flex;
    flex-direction: column;
    right: -100%;
    bottom: 0;
    width: 70%;
    height: 100%;
    padding: 32px 26px 0 32px;
    background: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(40.774227142333984px);
}
.navbar__btn {
    width: 20px;
    height: 20px;
    align-self: flex-end;
}
.navbar__navigation {
    display: flex;
    flex-direction: column;
    margin-top: 64px;
    gap: 32px;
}
.navbar__navigation-link {
    text-decoration: none;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
}
@media screen and (min-width: 768px) {
    .navbar {
        position: static;
        flex-direction: row;
        padding: 0;
        height: 96px;
        width: 60%;
    }
    .navbar__btn {
        display: none;
    }
    .navbar__navigation {
        gap: 37px;
        flex-direction: row;
        margin-top: 0;
        padding-left: 48px;
    }
    .navbar__navigation-link {
        display: flex;
        align-items: center;
        height: 100%;
        border-bottom: 3px solid transparent;
    }
    .navbar__navigation-link:hover {
        color: #D0D6F9;
        border-color: rgba(255, 255, 255, 0.5);
    }
    .navbar__navigation-link-strong {
        display: none;
    }
    .navbar__navigation-link--active {
        border-color: #FFF;
    }
    .navbar__navigation-link--active:hover {
        color: #FFF;
        border-color: #FFF;
    }
}
@media screen and (min-width: 1200px) {
    .navbar {
        position: relative;
        padding-left: 120px;
    }
    .navbar::before {
        content: '';
        display: block;
        position: absolute;
        height: 1px;
        width: 550px;
        left: -48%;
        top: 44px;
        background-color: rgba(255, 255, 255, 0.25);
    }
    .navbar__navigation-link-strong {
        display: block;
        margin-right: 10px;
    }
}
</style>