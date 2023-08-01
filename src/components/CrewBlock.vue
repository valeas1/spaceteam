<template>
    <div class="crew">
        <h2 class="crew__pretitle"><span>02</span> Meet your crew</h2>
        <Carousel ref="myCarousel" @slide-start="slideStartHandler" class="crew__carousel">
            <Slide v-for="crews in crew" :key="crews.id">
                <div class="crew__img-conteiner">
                    <img class="crew__img" :src="crews.images.png">
                </div>
            </Slide>
        </Carousel>
        <ul class="crew__list">
            <li 
                v-for="btn of crew"
                :id="btn.id"
                class="crew__button" 
                :class="(currentIndex === btn.id)? 'crew__button--active' : undefined"
                @click="toSlide"></li>
        </ul>
        <p class="crew__role">{{ crewInfo.role }}</p>
        <p class="crew__name">{{ crewInfo.name }}</p>
        <p class="crew__bio" >{{ crewInfo.bio }}</p>
    </div>
</template>

<script setup lang="ts">
import {crew} from '@/data.json'
import {VueElement, ref} from 'vue';

import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const crewInfo = ref(crew[0]);
const currentIndex = ref('0')

const myCarousel = ref<any>(null)

function toSlide (e: Event) {
    const el = e.target as Element
    myCarousel.value.slideTo(Number(el.id));
    currentIndex.value = el.id;
}

function slideStartHandler(obj: any) {
    crewInfo.value = crew[obj.slidingToIndex]
    currentIndex.value = obj.slidingToIndex.toString();
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
.crew__list {
    list-style: none;
    display: flex;
    gap: 15px;
    margin-top: 32px;
}
.crew__button {
    display: block;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: #FFF;
    opacity: 0.2;
    cursor: pointer;
    transition: all 0.3 ease;
}
.crew__button--active {
    opacity: 1;
}
@media screen and (min-width: 768px) {
    .crew {
        padding-left: 38px;
        padding-right: 38px;
    }
    .crew__img {
        max-width: 450px;
        margin-top: 35px;
    }
    .crew__pretitle {
        font-size: 20px;
        letter-spacing: 3.375px;
        align-self: self-start;
    }
    .crew__list {
        order: 1;
        margin-top: 40px;
    }
    .crew__role {
        margin-top: 60px;
        font-size: 24px;
    }
    .crew__name {
        font-size: 40px;
        line-height: 28px
    }
    .crew__bio {
        font-size: 16px;
    }
}

@media screen and (min-width: 1300px) {
    .crew {
        display: grid;
        grid-template-columns: 60% 40%;
        width: 1300px;
        margin: 0 auto;
        padding-top: 76px;
    }
    .crew__carousel {
        grid-row: 1/7;
        grid-column: 2/3;
        overflow: hidden;
    }
    .crew__pretitle {
        font-size: 28px;
        letter-spacing: 4.725px;
    }
    .crew__role {
        font-size: 32px;
        text-align: start;
        justify-self: start;
        margin-top: 156px;
    }
    .crew__name {
        font-size: 56px;
        justify-self: start;
        margin-top: 32px;
    }
    .crew__bio {
        font-size: 18px;
        text-align: start;
        line-height: 32px;
        justify-self: start;
        margin-top: 28px;
        width: 60%;
    }
    .crew__list {
        align-self: end;
        margin-top: auto;
        grid-row: 6/7;
    }
    .crew__button:hover{
        opacity: 0.5;
    }
    .crew__button--active:hover {
        opacity: 1;
    }
 }
</style>
<style>
.carousel__pagination {
    gap: 15px;
    margin-top: 32px;
}
@media screen and (min-width: 768px){
    .crew__carousel {
        display: flex;
        flex-direction: column;
        align-items: center;
        order: 2;
    }
    .carousel__pagination {
        order: -1;
        margin-top: 0px;
    }
}
@media screen and (min-width: 1300px) {
    .carousel__viewport {
        width: 100%;
    }
    .carousel__slide {
        align-items: end;
    }
}
</style>