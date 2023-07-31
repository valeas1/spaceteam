<template>
    <div class="crew">
        <h2 class="crew__pretitle"><span>02</span> Meet your crew</h2>
        <Carousel @slide-start="slideStartHandler" class="crew__carousel">
            <Slide v-for="crews in crew" :key="crews.name">
                <div class="crew__img-conteiner">
                    <img class="crew__img" :src="crews.images.png">
                </div>
            </Slide>

            <template #addons>
                <Pagination />
            </template>
        </Carousel>
        <p class="crew__role">{{ crewInfo.role }}</p>
        <p class="crew__name">{{ crewInfo.name }}</p>
        <p class="crew__bio" >{{ crewInfo.bio }}</p>
    </div>
</template>

<script setup lang="ts">
import {crew} from '@/data.json'
import { ref} from 'vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'

const crewInfo = ref(crew[0]);

function slideStartHandler(obj: any) {
    crewInfo.value = crew[obj.slidingToIndex]
}
</script>

<style scoped>
.crew {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 24px;
    padding-bottom: 32px;
    overflow: hidden;
}
.crew__pretitle {
    color: #FFF;
    font-family: "Barlow Condensed";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.7px;
    text-transform: uppercase;
}
.crew__pretitle span {
    font-weight: 700;
    opacity: 0.25;
    margin-right: 18px;
}
.crew__carousel {
    margin-top: 32px;
}
.crew__img {
    display: block;
    max-width: 220px;
    aspect-ratio: auto;
}
.crew__img-conteiner {
    display: flex;
    align-items: center;
    justify-content: center;
    border-bottom: 1px solid #383B4B;
    width: 35%;
}
</style>
<style>
.carousel__pagination {
    gap: 15px;
    margin-top: 32px;
}
.carousel__pagination-button {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #FFF;
    opacity: 0.2;
}
.carousel__pagination-button--active {
    opacity: 1;
}
.carousel__pagination-button:hover {
    opacity: 0.5;
}
.carousel__pagination-button::after {
    display: none;
}
.crew__role {
    color: #FFF;
    text-align: center;
    font-family: 'Bellefair';
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    opacity: 0.5;
    margin-top: 32px;
}
.crew__name {
    color: #FFF;
    text-align: center;
    font-family: 'Bellefair';
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 8px;
}
.crew__bio {
    color: #D0D6F9;
    text-align: center;
    font-family: 'Barlow';
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    margin-top: 16px;
    width: 85%;
}
</style>