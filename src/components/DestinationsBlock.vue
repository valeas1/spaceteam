<template>
    <div class="destination">
        <p class="destination__pretitle"><span>01</span> Pick your destination</p>
        <img class="destination__img" :src="tab.images.png">
        <ul class="destination__list">
            <li 
                :class="(planet.name === tab.name)? 'destination__list-item destination__list-item--active' : 'destination__list-item'" 
                v-for="planet in destinations"
                @click="tabHandler">
                    {{ planet.name }}
            </li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import {destinations} from '@/data.json'
import { ref } from 'vue';  

const tab = ref(destinations[0])

const tabHandler = (e: Event) => {
    const item = e.target as Element;
    const idx = destinations.findIndex((planet)=> planet.name === item.innerHTML);
    tab.value = destinations[idx]
}


</script>

<style scoped>
.destination {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
}
.destination__pretitle {
    color: #FFF;
    font-family: "Barlow Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    text-transform: uppercase;
}
.destination__pretitle span {
    font-weight: 700;
    opacity: 0.25;
    margin-right: 18px;
}
.destination__img {
    width: 170px;
    height: 170px;
    margin-top: 32px;
}
.destination__list {
    list-style: none;
    display: flex;
    gap: 26px;
    margin-top: 26px;
}
.destination__list-item {
    color: #D0D6F9;
    font-family: Barlow Condensed;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;
    padding-bottom: 8px;
    border-bottom: 2px solid transparent;
}
.destination__list-item--active {
    border-color: #FFF;
}

</style>