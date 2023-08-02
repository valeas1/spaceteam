<template>
    <div class="destination">
        <p class="destination__pretitle"><span>01</span> Pick your destination</p>
        <img class="destination__img" :src="tab.images.png" />
        <ul class="destination__list">
            <li 
                :class="(planet.name === tab.name)? 'destination__list-item destination__list-item--active' : 'destination__list-item'" 
                v-for="planet in destinations"
                @click="tabHandler">
                    {{ planet.name }}
            </li>
        </ul>
        <h2 class="destination__title">{{ tab.name }}</h2>
        <p class="destination__text">{{ tab.description }}</p>
        <div class="destination__line">
            <div>
                <p class="destination__predistance">AVG. DISTANCE</p>
                <p class="destination__distance">{{ tab.distance }}</p>
            </div>
            <div>
                <p class="destination__pretime">Est. travel time</p>
                <p class="destination__time">{{ tab.travel }}</p>
            </div>
        </div>
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
    padding-bottom: 32px;
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
    font-family: "Barlow Condensed";
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
.destination__title {
    color: #FFF;
    text-align: center;
    font-family: "Bellefair";
    font-size: 56px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 20px;
}
.destination__text {
    color: #D0D6F9;
    text-align: center;
    font-family: "Barlow";
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 25px;
    width: 85%;
    margin-top: 5px;
}
.destination__line {
    width: 90%;
    border-top: 1px solid #383B4B;
    margin-top: 32px;
}
.destination__predistance {
    color: #D0D6F9;
    text-align: center;
    font-family: "Barlow Condensed";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;
    margin-top: 32px;
}
.destination__distance {
    color: #FFF;
    text-align: center;
    font-family: "Bellefair";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 12px;
}
.destination__pretime {
    color: #D0D6F9;
    text-align: center;
    font-family: "Barlow Condensed";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: 2.362px;
    text-transform: uppercase;
    margin-top: 32px;
}
.destination__time {
    color: #FFF;
    text-align: center;
    font-family: "Bellefair";
    font-size: 28px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-transform: uppercase;
    margin-top: 12px;
}

@media screen and (min-width: 768px) {
    .destination {
        padding-left: 32px;
        padding-right: 32px;
    }
    .destination__pretitle {
        align-self: flex-start;
        font-size: 20px;
        letter-spacing: 3.375px;
    }
    .destination__img {
        width: 300px;
        height: 300px;
        margin-top: 60px;
    }
    .destination__list {
        gap: 36px;
    }
    .destination__list-item {
        font-size: 16px;
        letter-spacing: 2.7px;
        border-bottom: 3px solid transparent;
    }
    .destination__list-item--active {
        border-color: #FFF;
    }
    .destination__title {
        font-size: 80px;
        margin-top: 32px;
    }
    .destination__text {
        font-size: 16px;
        line-height: 28px;
        margin-top: 10px;
    }
    .destination__line {
        display: flex;
        justify-content: space-around;
        margin-top: 50px;
    }
}
@media screen and (min-width: 1300px){
        .destination {
            max-width: 1300px;
            margin: 0 auto;
            display: grid;
            grid-template-columns: 1fr 1fr;
            padding-top: 76px;
            padding-bottom: 116px;
        }
        .destination__pretitle {
            grid-column: 1/3;
            font-size: 28px;
            letter-spacing: 4.725px;
        }
        .destination__img {
            grid-column: 1/2;
            grid-row: 2/6;
            justify-self: center;
            width: 445px;
            height: 445px;
        }
        .destination__title {
            justify-self: start;
            font-size: 100px;
            margin-top: 36px;
        }
        .destination__text {
            font-size: 18px;
            line-height: 32px;
            text-align: start;
        }
        .destination__list {
            margin-top: 64px;
        }
        .destination__list-item {
            cursor: pointer;
        }
        .destination__list-item:hover {
            border-color: rgba(255, 255, 255, 0.5)
        }
    }
</style>